import React, { useState } from "react";


function App() {

  const [count, setCount] = useState(0);

  console.log("App")
  function buttonFunctionality(action) {
    switch (action) {
      case "increament":
        setCount(count + 1);
        break;
      case "decreament":
        setCount(count - 1);
        break;
      default:
        break;
    }
  }

  return (
    <div className="App">
      <p>{count} </p>
      <button onClick={() => buttonFunctionality("increament")}>Increament</button>
      <button onClick={() => buttonFunctionality("decreament")}>Decreament</button>
    </div>
  );
}

/**
 * install packages in yarn
 * create a basic app
 * create an express server
 * read the index file and in that replace root div with app content
 * create index file add ignore-styles, aand babel/register and import server
 */

export default App;
