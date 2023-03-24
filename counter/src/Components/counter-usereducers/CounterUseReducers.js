import React, { useReducer } from "react";

const CounterUseReducers = () => {

    let initialState = {
        firstCounter: 0,
        secondCounter: 10
    };
    function reducer(state, action) {
        switch (action.type) {
            case "increment":
                return { ...state, firstCounter: state.firstCounter + action.value };
            case "decrement":
                return { ...state, firstCounter: state.firstCounter - action.value };
            case "increment2":
                return { ...state, secondCounter: state.secondCounter + action.value };
            case "decrement2":
                return { ...state, secondCounter: state.secondCounter - action.value };
            case "reset":
                return initialState;
            default:
                return state;
        }
    }

    const [count, updateCount] = useReducer(reducer, initialState);

    return (
        <React.Fragment>
            <p>First Counter: {count.firstCounter}</p>
            <button onClick={() => { updateCount({ type: "increment", value: 1 }) }}>Increament</button>
            <button onClick={() => { updateCount({ type: "decrement", value: 1 }) }}>Decreament</button>
            <button onClick={() => { updateCount({ type: "increment", value: 5 }) }}>Increament by 5</button>
            <button onClick={() => { updateCount({ type: "decrement", value: 5 }) }}>Decreament by 5</button>
            <p>Second Counter: {count.secondCounter}</p>
            <button onClick={() => { updateCount({ type: "increment2", value: 1 }) }}>Increament</button>
            <button onClick={() => { updateCount({ type: "decrement2", value: 1 }) }}>Decreament</button>
            <button onClick={() => { updateCount({ type: "reset" }) }}>Reset</button>
        </React.Fragment>
    )
}

export default CounterUseReducers;