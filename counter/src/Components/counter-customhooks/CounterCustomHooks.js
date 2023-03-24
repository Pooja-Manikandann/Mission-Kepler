import React from 'react';
import useCounter from '../../Hooks/useCounter';

const CounterCustomHooks = () => {

    const { count, incrementCount, decrementCount } = useCounter();
    return (
        <React.Fragment>
            <div>Count - {count}</div>
            <button onClick={incrementCount}>Increament</button>
            <button onClick={decrementCount}>Decreament</button>
        </React.Fragment>
    )
}

export default CounterCustomHooks;