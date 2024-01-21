import './App.css';
import { useSelector, useDispatch } from 'react-redux';

function App() {

  const counter = useSelector(state => state.counter);
  const show = useSelector(state => state.showCounter)
  const dispatch = useDispatch();

  function handleIncreamentClick() {
    dispatch({type: 'increament'})
  }
  
  function handleDecreamentClick() {
    dispatch({type: 'decreament'})
  }

  function handleToggle() {
    dispatch({type: 'toggle'})
  }

  return (
    <div className="App">
      <div>
        {show && <p>{counter}</p>}
        <button onClick={handleIncreamentClick}>Increase</button>
        <button>Reset</button>
        <button onClick={handleDecreamentClick}>Decrease</button><br />
        <button onClick={handleToggle}>Toggle</button>

      </div>
    </div>
  );
}

export default App;
