import React, { useState } from "react";
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

const handleAddBookEvent = e => {
  e.preventDefault();
};

const AddBook = ({ data }) => {
  const [bookName, setBookName] = useState("");
  const [bookGenre, setBookGenre] = useState("");
  const [authorId, setAuthorId] = useState("");

  return (
    <form id='add-book'>
      <div className='field'>
        <label>Book name</label>
        <input type='text' onChange={e => setBookName(e.target.value)} />
      </div>
      <div className='field'>
        <label>Book genre</label>
        <input type='text' onChange={e => setBookGenre(e.target.value)} />
      </div>
      <div className='field'>
        <label>Author</label>
        <select onChange={e => setAuthorId(e.target.value)}>
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
