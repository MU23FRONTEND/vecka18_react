import { useState } from 'react';

function Counter() {
    const [counter, setCounter] = useState<number>(0);

    const decreaseCount = () => {
        if(counter > 0) setCounter(prevCounter => prevCounter - 1);
    }

    const increaseCount = () => {
        setCounter(prevCounter => prevCounter + 1);
    }

  return (
    <div className="counter">
        <button onClick={ decreaseCount }>-</button>
        <p>{ counter }</p>
        <button onClick={ increaseCount}>+</button>
    </div>
  )
}

export default Counter
