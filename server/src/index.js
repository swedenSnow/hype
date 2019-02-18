const { GraphQLServer } = require('graphql-yoga');
const { Prisma } = require('prisma-binding');
const prisma = require('./prisma');
const Mutation = require('./resolvers/Mutation');
const Query = require('./resolvers/Query');

const server = new GraphQLServer({
    typeDefs: 'src/schema.graphql',
    resolvers: {
        Mutation,
        Query,
    },
    resolverValidationOptions: {
        requireResolversForAllFields: false,
        requireResolversForResolveType: false,
    },
    context: req => ({
        ...req,
        prisma,
        debug: true,
    }),
});

server.start(() => console.log('Server is running on http://localhost:4000'));
