const { GraphQLObjectType, GraphQLString, GraphQLFloat, GraphQLID } = require("graphql");

const EmployeeType = new GraphQLObjectType({
  name: "Employee",
  fields: () => ({
    id: { type: GraphQLID }, // Changed to GraphQLID for consistency
    first_name: { type: GraphQLString },
    last_name: { type: GraphQLString },
    email: { type: GraphQLString },
    designation: { type: GraphQLString },
    salary: { type: GraphQLFloat },
  }),
});

module.exports = EmployeeType; //  Exporting directly
