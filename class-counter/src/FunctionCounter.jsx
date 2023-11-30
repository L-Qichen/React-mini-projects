import { useState } from 'react'
export const FunctionCounter = () => {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleDecrement = () => {
    setCounter(counter - 1);
  };

  return (
    <div className='component-container'>
      <h1>functional counter component.</h1>
      <h3>Current value of counter: {counter}</h3>
      <button type='button' className='btn' onClick={handleIncrement}>Increase(+1)</button>
      <button type='button' className='btn' onClick={handleDecrement}>Increase(-1)</button>
    </div>
  );
}