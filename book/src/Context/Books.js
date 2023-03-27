import React, { createContext, useState } from "react";
import Axios from "axios"

const BookContext = createContext();

const Provider = ({ children }) => {

    const [books, setbooks] = useState([]);

    async function fetchBooks() {
        let response = await Axios.get("http://localhost:3001/books");
        setbooks(response.data)
    }
    async function appendToBooks(bookTitle) {
        let response = await Axios.post("http://localhost:3001/books", {
            title: bookTitle
        })
        setbooks([...books, response.data])
    }

    async function deleteBook(id) {
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


    const valuesToExport = { books, fetchBooks, appendToBooks, deleteBook, updateBookTitle }

    return <BookContext.Provider value={valuesToExport}>{children}</BookContext.Provider>
}

export { Provider }
export default BookContext;