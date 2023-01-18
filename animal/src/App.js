import { useState } from "react";

function App() {

  const [count, setCount] = useState(0)

  let handleClick = () => {
    setCount(count+1);
  }
  return (
    <div>
      <button onClick={handleClick}>Add Animal</button>
      <p>Animal count: {count}</p>
    </div>
  );
}

export default App;
