const { GraphQLObjectType, GraphQLString, GraphQLFloat } = require("graphql");

const EmployeeType = new GraphQLObjectType({
  name: "Employee",
  fields: {
    id: { type: GraphQLString },
    first_name: { type: GraphQLString },
    last_name: { type: GraphQLString },
    email: { type: GraphQLString },
    designation: { type: GraphQLString },
    salary: { type: GraphQLFloat },
  },
});

module.exports = { EmployeeType };
