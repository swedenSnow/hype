const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const stripe = require('../stripe');

const Mutations = {
    async signup(_, args, context, info) {
        args.email = args.email.toLowerCase();
        if (args.password !== args.confirmPassword) {
            throw new Error("Passwords didn't match");
        }
        const password = await bcrypt.hash(args.password, 10);
        delete args.confirmPassword;
        const user = await context.prisma.mutation.createUser(
            {
                data: {
                    ...args,
                    password,
                },
            },
            info
        );

        const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);

        context.response.cookie('token', token, {
            httpOnly: true,
            maxAge: 1000 * 60 * 60 * 24 * 365,
        });

        return user;
    },
    async signin(parent, { email, password }, context, info) {
        const user = await context.prisma.query.user({ where: { email } });
        if (!user) {
            throw new Error(`No such user found for email ${email}`);
        }

        const valid = await bcrypt.compare(password, user.password);
        if (!valid) {
            throw new Error(`Invalid Password`);
        }

        const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);

        context.response.cookie('token', token, {
            httpOnly: true,
            maxAge: 1000 * 60 * 60 * 24 * 365,
        });
        return user;
    },
    signout(parent, args, context, info) {
        context.response.clearCookie('token');
        return { message: 'Successfully logged out' };
    },
    async createItem(parent, args, context, info) {
        if (!context.request.userId) {
            throw new Error('You must be signed in to sell an item.');
        }

        const item = await context.prisma.mutation.createItem(
            {
                data: {
                    user: {
                        connect: {
                            id: context.request.userId,
                        },
                    },
                    ...args,
                },
            },
            info
        );

        return item;
    },
    async addToCart(parent, args, context, info) {
        const { userId } = context.request;
        if (!userId) {
            throw new Error('You must be signed in to do that!');
        }

        const [existingCartItem] = await context.prisma.query.cartItems({
            where: {
                user: { id: userId },
                item: { id: args.id },
            },
        });
        if (existingCartItem) {
            console.log('This item is already in da cart!');
            return context.prisma.mutation.updateCartItem(
                {
                    where: { id: existingCartItem.id },
                    data: { quantity: existingCartItem.quantity + 1 },
                },
                info
            );
        }
        return context.prisma.mutation.createCartItem(
            {
                data: {
                    user: { connect: { id: userId } },
                    item: { connect: { id: args.id } },
                },
            },
            info
        );
    },
    async removeFromCart(parent, args, context, info) {
        const cartItem = await context.prisma.query.cartItem(
            {
                where: {
                    id: args.id,
                },
            },
            `{ id, user {id}}`
        );
        if (!cartItem) {
            throw new Error('No Cart item found');
        }
        if (cartItem.user.id !== context.request.userId) {
            throw new Error('You dont own this');
        }
        return context.prisma.mutation.deleteCartItem(
            {
                where: {
                    id: args.id,
                },
            },
            info
        );
    },
    async createOrder(parent, args, context, info) {
        const { userId } = context.request;
        if (!userId)
            throw new Error('You must be signed in to complete the order!');
        const user = await context.prisma.query.user(
            { where: { id: userId } },
            `{
            id 
            firstName 
            lastName
            email 
            cart { 
                id 
                quantity 
                item {title price id description image
                }
            }
        }`
        );
        //! Recalculate the total for the price(Server side, so they cant go in and edit the price in javascript to 0.01;-)
        const amount = user.cart.reduce(
            (total, cartItem) =>
                total + cartItem.item.price * cartItem.quantity,
            0
        );
        console.log(`Going to charge for a total of ${amount}`);
        const charge = await stripe.charges.create({
            amount,
            currency: 'EUR',
            source: args.token,
            description: 'Hype-gear items',
        });
        const orderItems = user.cart.map(cartItem => {
            const orderItem = {
                ...cartItem.item,
                quantity: cartItem.quantity,
                user: { connect: { id: userId } },
            };
            delete orderItem.id;
            return orderItem;
        });
        const order = await context.prisma.mutation
            .createOrder({
                data: {
                    total: charge.amount,
                    charge: charge.id,
                    items: { create: orderItems },
                    user: { connect: { id: userId } },
                },
            })
            .catch(err => console.log(err.message));
        const cartItemIds = user.cart.map(cartItem => cartItem.id);
        await context.prisma.mutation.deleteManyCartItems({
            where: { id_in: cartItemIds },
        });
        return order;
    },
};

module.exports = Mutations;
