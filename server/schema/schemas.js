import graphql, { GraphQLObjectType, GraphQLString } from "graphql";
import { resolve } from "path";

const BookType = new GraphQLObjectType({
  name: "Book",
  fields: () => {
    id: {
      type: GraphQLString;
      require: true;
    }
    name: {
      type: GraphQLString;
      require: true;
    }
    genre: {
      type: GraphQLString;
      require: true;
    }
  }
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    book: {
      type: BookType,
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {}
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
