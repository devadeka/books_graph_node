import { GraphQLObjectType, GraphQLString } from "graphql";
const _ = require("lodash");

//dummy data
var books = [
  {name: 'book1', genre: 'genre1', id:'1'}
  {name: 'book2', genre: 'genre2', id:'2'}
  {name: 'book3', genre: 'genre3', id:'3'}
]

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
      resolve(parent, args) {
        return _.find(books, {id: args.id})
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
