import graphql, { GraphQLObjectType, GraphQLString } from "graphql";

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
