import CreateBook from "./Components/CreateBook/CreateBook";
import React, { useState, useEffect } from "react"
import BookShow from "./Components/BookShow/BookShow"
import Axios from "axios"

function App() {
  const [books, setbooks] = useState([]);

  async function appendToBooks(bookTitle) {
    let response = await Axios.post("http://localhost:3001/books", {
      title: bookTitle
    })
    setbooks([...books, response.data])
  }

  async function deleteBook(id) {
    console.log("id", `http://localhost:3001/books/${id}`)
    await Axios.delete(`http://localhost:3001/books/${id}`)
    let updatedBooks = books.filter(book => book.id !== id)
    setbooks(updatedBooks)
  }

  async function updateBookTitle(id, updatedTitle) {
    let response = await Axios.put(`http://localhost:3001/books/${id}`, {
      title: updatedTitle
    })
    let updatedBooksList = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...response.data }
      }
      return book;
    })
    setbooks(updatedBooksList)
  }

  async function fetchBooks() {
    let response = await Axios.get("http://localhost:3001/books");
    setbooks(response.data)
  }

  useEffect(() => {
    fetchBooks();
  }, [])


  return (
    <div>
      <h1>Reading list!!!</h1>
      <BookShow books={books} deleteBook={deleteBook} updateBookTitle={updateBookTitle} />
      <CreateBook onCreateBook={appendToBooks} />
    </div>
  );
}

export default App;
