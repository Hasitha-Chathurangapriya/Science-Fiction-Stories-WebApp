import React, { useState, useEffect } from "react";
import "./BookAPI.css";
import AppBarr from "../Home/AppBar";
import Footer from "../Home/Footer";

function BookAPI() {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(
            searchTerm
          )}&maxResults=20`
        );
        const data = await response.json();

        // Check if 'items' property exists in the response data
        if (data.items) {
          setBooks(data.items);
        } else {
          console.error("Books data is not in the expected format:", data);
        }
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchData();
  }, [searchTerm]);

  return (
    <div>
      <AppBarr />
      <div className="BookAPI">
        <h1>Science Fiction Books</h1>
        <div>
          <label htmlFor="search">Search by Book Name:</label>
          <input
            type="text"
            id="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <ul>
          {books.map((book) => (
            <li key={book.id}>
              <h3>{book.volumeInfo.title}</h3>
              <p>
                Author:{" "}
                {book.volumeInfo.authors
                  ? book.volumeInfo.authors.join(", ")
                  : "Unknown"}
              </p>
              <p>Published Date: {book.volumeInfo.publishedDate}</p>
              <p>Description: {book.volumeInfo.description}</p>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
}

export default BookAPI;
