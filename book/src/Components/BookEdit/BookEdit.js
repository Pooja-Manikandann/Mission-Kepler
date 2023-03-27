import React, { useContext, useState } from "react"
import BookContext from "../../Context/Books";
import "./BookEdit.css"

function BookEdit({ handleEdit, book }) {

    const { updateBookTitle } = useContext(BookContext)

    const [newTitle, setNewTitle] = useState(book.title)

    function handleChange(e) {
        setNewTitle(e.target.value);
    }

    function saveTitle(e) {
        e.preventDefault();
        updateBookTitle(book.id, newTitle)
        handleEdit();
    }


    return (
        <form className="edit-form">
            <input type="text" value={newTitle} onChange={handleChange} />
            <button onClick={saveTitle}>Save</button>
        </form>
    )
}

export default BookEdit;