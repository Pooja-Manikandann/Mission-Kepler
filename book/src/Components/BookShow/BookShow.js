import React, { useContext } from "react"
import BookContext from "../../Context/Books"
import Book from "../Book/Book"
import "./BookShow.css"
function BookShow() {
    const { books } = useContext(BookContext)

    let bookList = books.map((book, index) => {
        return <Book key={book.id} book={book} />
    })

    return (
        <div className="books-container">
            {bookList}
        </div>
    )
}
export default BookShow;