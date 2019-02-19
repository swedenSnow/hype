const { Prisma } = require('prisma-binding');

const prisma = new Prisma({
    typeDefs: 'src/generated/prisma.graphql',
    endpoint: process.env.PRISMA_ENDPOINT,
    debug: true,
});

module.exports = prisma;
