const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

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
    updateItem(parent, args, context, info) {
        const updates = { ...args };
        delete updates.id;
        return context.prisma.mutation.updateItem(
            {
                data: updates,
                where: {
                    id: args.id,
                },
            },
            info
        );
    },
    async deleteItem(parent, args, context, info) {
        const where = { id: args.id };
        const item = await context.prisma.query.item(
            { where },
            `{ id title user { id } }`
        );
        const ownsItem = item.user.id === context.request.userId;

        //ToDo: Add Admin Check here

        if (!ownsItem) {
            throw new Error("You don't have permissions to do that");
        }

        await context.prisma.mutation.deleteItem({ where }, info);

        return { message: 'Item deleted.' };
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
    async createOrder(parent, args, context, info) {
        throw new Error('This needs to be implemented!');
        const { userId } = context.request;
        if (!userId) {
            throw new Error('You must be logged in to complete this order!');
        }

        return;
    },
};

module.exports = Mutations;
