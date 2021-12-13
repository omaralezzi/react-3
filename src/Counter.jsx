import { useState } from 'react';

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  return (
    <div>
      <p>{counter}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={() => setCounter((prevCounter) => prevCounter - 1)}>
        Decrement
      </button>
      <button onClick={() => setCounter(0)}>Reset</button>
    </div>
  );
};

export default Counter;
