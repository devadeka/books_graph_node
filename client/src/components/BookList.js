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

const BookList = props => {
  console.log(props);
  return (
    <React.Fragment>
      <ul id='books-list'>
        <li>Book Name</li>
      </ul>
    </React.Fragment>
  );
};

export default graphql(getBooksQuery)(BookList);
