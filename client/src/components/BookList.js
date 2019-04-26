import React from "react";
import { gql } from "apollo-boost";
import { graphql } from "react-apollo";

const getBooksQuery = gql`
  {
    books {
      name
      genre
    }
  }
`;

const displayBooks = books => {
  return (
    <ul>
      {books.map((book, id) => {
        return <li key={id}>{book.name}</li>;
      })}
    </ul>
  );
};

const displayLoading = () => {
  return <h4>Loading books</h4>;
};

const BookList = ({ data }) => {
  console.log(data);
  return (
    <React.Fragment>
      {data.loading ? displayLoading() : displayBooks(data.books)}
    </React.Fragment>
  );
};

export default graphql(getBooksQuery)(BookList);
