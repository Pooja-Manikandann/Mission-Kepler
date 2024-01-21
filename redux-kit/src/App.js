import logo from './logo.svg';
import './App.css';
import { counterActions } from './store';
import { useSelector, useDispatch } from 'react-redux';


function App() {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);
  const show = useSelector(state => state.showCounter)

  function handleIncreamentClick() {
    dispatch(counterActions.increament())
  }
  function handleIncreamentBy5Click() {
    dispatch(counterActions.increamentBy5(5))
  }
  
  function handleDecreamentClick() {
    dispatch(counterActions.decreament)
  }

  function handleToggle() {
    dispatch(counterActions.toggle())
  }

  return (
    <div className="App">
      <div>
        {show && <p>{counter}</p>}
        <button onClick={handleIncreamentClick}>Increase</button>
        <button onClick={handleIncreamentBy5Click}>Increase by 5</button>
        <button>Reset</button>
        <button onClick={handleDecreamentClick}>Decrease</button><br />
        <button onClick={handleToggle}>Toggle</button>

      </div>
    </div>
  );
}

export default App;
