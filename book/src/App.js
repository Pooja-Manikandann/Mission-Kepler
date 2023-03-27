import CreateBook from "./Components/CreateBook/CreateBook";
import React, { useState, useEffect, useContext } from "react"
import BookShow from "./Components/BookShow/BookShow"
import BookContext from './Context/Books'

function App() {


  const { fetchBooks } = useContext(BookContext)

  useEffect(() => {
    fetchBooks();
  }, [])


  return (
    <div>
      <h1>Reading list!!!</h1>
      <BookShow />
      <CreateBook />
    </div>
  );
}

// to start server - npm run server

export default App;
