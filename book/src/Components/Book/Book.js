import React, { useContext, useState } from "react"
import BookContext from "../../Context/Books";
import BookEdit from "../BookEdit/BookEdit";
import "./Book.css"

function Book({ book }) {
    const [showEdit, setShowEdit] = useState(false);
    const { deleteBook } = useContext(BookContext)
    function handleClick() {
        deleteBook(book.id)
    }

    function handleEdit() {
        setShowEdit(!showEdit);
    }

    let element = <p>{book.title}</p>
    if (showEdit) {
        element = <BookEdit book={book} handleEdit={handleEdit} />
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