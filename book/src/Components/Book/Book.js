import React, { useState } from "react"
import BookEdit from "../BookEdit/BookEdit";
import "./Book.css"

function Book({ book, deleteBook, updateBookTitle }) {
    const [showEdit, setShowEdit] = useState(false);
    function handleClick() {
        deleteBook(book.id)
    }

    function handleEdit() {
        setShowEdit(!showEdit);
    }


    let element = <p>{book.title}</p>
    if (showEdit) {
        element = <BookEdit handleEdit={handleEdit} book={book} updateBookTitle={updateBookTitle} />
    }

    return (
        <div className="book-wrapper">
            <div className="actions">
                <span onClick={handleEdit}>EDIT</span>
                <span onClick={handleClick}>DELETE</span>

            </div>
            <img src="https://picsum.photos/200/300" alt="bookimage" />
            {element}

        </div>
    )
}

export default Book;