const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLNonNull,
  } = require('graphql');
  
  const UserType = new GraphQLObjectType({
    name: 'User',
    fields: {
      id: { type: new GraphQLNonNull(GraphQLID) },
      username: { type: new GraphQLNonNull(GraphQLString) },
      email: { type: new GraphQLNonNull(GraphQLString) },
      password: { type: new GraphQLNonNull(GraphQLString) },
      created_at: { type: GraphQLString },
      updated_at: { type: GraphQLString },
    },
  });
  
  module.exports = UserType;
  