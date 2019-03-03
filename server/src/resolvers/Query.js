const { forwardTo } = require('prisma-binding');

const Query = {
    item: forwardTo('prisma'),
    items: forwardTo('prisma'),
    user(_, args, context, info) {
        return context.prisma.query.user(
            {
                where: {
                    id: args.id,
                },
            },
            info
        );
    },
    async users(parent, args, context, info) {
        if (!context.request.userId) {
            throw new Error('You must be logged in!');
        }

        if (context.request.user.userLevel !== 'ADMIN') {
            throw new Error(`You don't have permissions to view this page.`);
        }

        return context.prisma.query.users({}, info);
    },
    self(_, args, context, info) {
        if (!context.request.userId) {
            return null;
        }
        return context.prisma.query.user(
            {
                where: { id: context.request.userId },
            },
            info
        );
    },
    async order(_, args, context, info) {
        if (!context.request.userId) {
            throw new Error('You must be logged in!');
        }

        const order = await context.prisma.query.order(
            {
                where: { id: args.id },
            },
            info
        );

        const ownsOrder = (order.user.id = context.request.userId);

        const isAdmin = context.request.user.userLevel === 'ADMIN';

        if (!ownsOrder && !isAdmin) {
            throw new Error(
                'You are not allowed to see the information for this order.'
            );
        }

        return order;
    },
    async orders(_, args, context, info) {
        const { userId } = context.request;

        if (!userId) {
            throw new Error('You must be logged in!');
        }

        // Needs permission Check?

        return context.prisma.query.orders(
            {
                where: {
                    user: { id: userId },
                },
            },
            info
        );
    },
};

module.exports = Query;
