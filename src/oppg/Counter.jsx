import { useState } from 'react'


function Counter() {
    const [count, setCount] = useState(0);
  
    const increaseCount = () => {
        setCount(count + 1);
    }

    const resetCount = () => {
        setCount(0)

    }
    return (
      <div>
        <h1>Counter</h1>
        <h1>{count}</h1>
        <button onClick={increaseCount}>Øk</button>
        <button onClick={resetCount }>Tilbakestill</button>
      </div>
    );
  }
  
  export default Counter;
  