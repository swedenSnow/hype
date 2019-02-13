const { Prisma } = require('prisma-binding');

const prisma = new Prisma({
    typeDefs: 'src/generated/prisma.graphql',
    endpoint: 'https://eu1.prisma.sh/mikael-larsson/hype-gear/dev',
    debug: true,
})

module.exports = prisma;