import React, { useState } from "react"

function CreateBook({ onCreateBook }) {
    const [book, updateBook] = useState("")


    function handleChange(e) {
        updateBook(e.target.value)
    }

    function createBook(e) {
        e.preventDefault();
        onCreateBook(book);
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