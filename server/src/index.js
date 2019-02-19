const { GraphQLServer } = require('graphql-yoga');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
require('dotenv').config({ path: '.env' });
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

server.express.use(cookieParser());

server.express.use((req, _, next) => {
    const { token } = req.cookies;

    if (token) {
        const { userId } = jwt.verify(token, process.env.APP_SECRET);
        req.userId = userId;
    }

    next();
});

server.express.use(async (req, _, next) => {
    if (!req.userId) return next();
    const user = await prisma.query.user(
        { where: { id: req.userId } },
        '{ id, email, firstName}'
    );
    req.user = user;
    next();
});

server.start(
    { cors: { credentials: true, origin: process.env.FRONTEND_URL } },
    options =>
        console.log(`Server is running on http://localhost:${options.port}`)
);
