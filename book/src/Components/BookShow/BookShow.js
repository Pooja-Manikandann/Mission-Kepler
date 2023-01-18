import React from "react"
import Book from "../Book/Book"
import "./BookShow.css"
function BookShow({ books, deleteBook, updateBookTitle }) {

    let bookList = books.map((book, index) => {
        return <Book deleteBook={deleteBook} updateBookTitle={updateBookTitle} book={book} key={book.id} />
    })

    return (
        <div className="books-container">
            {bookList}
        </div>
    )
}
export default BookShow;