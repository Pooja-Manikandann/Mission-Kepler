import React, { useContext, useState } from "react"
import BookContext from "../../Context/Books";

function CreateBook() {
    const { appendToBooks } = useContext(BookContext)
    const [book, updateBook] = useState("")


    function handleChange(e) {
        updateBook(e.target.value)
    }

    function createBook(e) {
        e.preventDefault();
        appendToBooks(book);
        updateBook('');
    }

    return (
        <div>
            <form>
                <input type="text" value={book} onChange={handleChange} />
                <button onClick={createBook} >Create book</button>
            </form>
        </div>
    )
}

export default CreateBook;