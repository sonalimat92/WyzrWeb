import "./styles.css";
import axios from "axios";
import { useState } from "react";
import GoogleLogin from "react-google-login";

function Search() {
  const [book, setBook] = useState("");
  const [result, setResult] = useState([]);
  const [apiKey, setApiKey] = useState(
    "AIzaSyD4xu4OqgfQlgGWR7als6i79UehNAgyzLA"
  );

  function handleChange(event) {
    const book = event.target.value;
    setBook(book);
  }

  function handlesubmit(event) {
    event.preventDefault();
    axios
      .get(
        "https://www.googleapis.com/books/v1/volumes?q=" +
          book +
          "&key=" +
          apiKey +
          "&maxResults=40"
      )
      .then((data) => {
        console.log(data.data.items);
        setResult(data.data.items);
      });
  }

  return (
    <div className="container">
      <h1>Book Search App</h1>
      <form onSubmit={handlesubmit}>
        <div class="form-group">
          <input
            type="text"
            onChange={handleChange}
            className="form-control mt-20"
            placeholder="Search For Books"
            autoComplete="off"
          />
        </div>
        <button type="submit" className="btn btn-danger">
          Search
        </button>
      </form>
      {result.map((book) => (
        <a target="_blank" href={book.volumeInfo.previewLink}>
          <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.title} />
        </a>
      ))}
    </div>
  );
}
export default Search;
