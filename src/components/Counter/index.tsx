import { useState } from 'react';

export function Counter() {
  const [counter, setCounter] = useState(0);

  const handleIncrementCounter = () => {
    setCounter((previousState) => (previousState += 1));
  };

  return (
    <div className="flex items-center gap-2 rounded-lg border border-slate-300 px-4 py-2">
      <p>Counter: {counter}</p>
      <button
        className="rounded-lg bg-slate-500 px-4 py-2 font-medium text-slate-100"
        onClick={handleIncrementCounter}
      >
        +
      </button>
    </div>
  );
}
