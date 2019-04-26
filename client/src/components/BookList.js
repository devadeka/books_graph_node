import React from "react";
import { graphql } from "react-apollo";
import { getBooksQuery } from "../queries/queries";

const displayBooks = books => {
  return (
    <ul>
      {books.map((book, id) => {
        return (
          <li key={id}>
            <bold>{book.name}</bold> a {book.genre} book by {book.author.name}
          </li>
        );
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
