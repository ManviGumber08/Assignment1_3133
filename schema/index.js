const { GraphQLObjectType, GraphQLSchema } = require("graphql");
const { userQueries, userMutations } = require("../resolvers/userResolver");
const { employeeQueries, employeeMutations } = require("../resolvers/employeeResolver");

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    ...userQueries,
    ...employeeQueries,
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    ...userMutations,
    ...employeeMutations,
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
