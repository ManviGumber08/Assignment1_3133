const { GraphQLObjectType, GraphQLSchema } = require("graphql");
const { employeeQueries, employeeMutations } = require("../resolvers/employeeResolver");
const { userQueries, userMutations } = require("../resolvers/userResolver");

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    ...employeeQueries,
    ...userQueries,
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    ...employeeMutations,
    ...userMutations,
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
