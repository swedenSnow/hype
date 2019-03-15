import { GraphQLEnumType } from 'graphql';

const userLevelEnumType = new GraphQLEnumType({
	name: 'UserLevel',
	values: {
		ADMIN: {
			value: 0,
		},
		USER: {
			value: 1,
		},
	},
});

export { userLevelEnumType as default };
