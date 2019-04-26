import React from "react";
import { graphql } from "react-apollo";
import { getAuthorsQuery } from "../queries/queries";

const displayLoading = () => {
  return <option>Loading Authors</option>;
};

const displayOptions = authors => {
  return authors.map((author, id) => {
    return (
      <option key={author.id} value={author.id}>
        {author.name}
      </option>
    );
  });
};

const AddBook = ({ data }) => {
  return (
    <form id='add-book'>
      <div className='field'>
        <label>Book name</label>
        <input type='text' />
      </div>
      <div className='field'>
        <label>Book genre</label>
        <input type='text' />
      </div>
      <div className='field'>
        <label>Author</label>
        <select>
          {data.loading ? displayLoading() : displayOptions(data.authors)}
        </select>
      </div>
      <div className='field'>
        <button>Add</button>
      </div>
    </form>
  );
};

export default graphql(getAuthorsQuery)(AddBook);
