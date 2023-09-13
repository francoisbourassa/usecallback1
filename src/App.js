import React, { useState, useCallback, memo } from 'react';
import './App.css';

const ShowCount = memo(({ text, count }) => {
  console.log(`Rendering ${text}`);
  return <div>{text}: {count}</div>;
});

function App() {
  const [count, setCount] = useState(0);
  const [otherCount, setOtherCount] = useState(0);

  const incrementCount = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  const incrementOtherCount = useCallback(() => {
    setOtherCount(otherCount + 1);
  }, [otherCount]);

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={incrementCount}>
          Increment Count
        </button>
        <button onClick={incrementOtherCount}>
          Increment Other Count
        </button>
        <ShowCount text="Count" count={count} />
        <ShowCount text="Other Count" count={otherCount} />
      </header>
    </div>
  );
}

export default App;
