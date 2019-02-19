const { forwardTo } = require('prisma-binding');

const Query = {
    item: forwardTo('prisma'),
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
};

module.exports = Query;
