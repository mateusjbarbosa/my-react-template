import { useState } from 'react';

export function Counter() {
  const [counter, setCounter] = useState(0);

  const handleIncrementCounter = () => {
    setCounter((previousState) => (previousState += 1));
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <p className="px-6 py-2" id="counter">
        Counter: {counter}
      </p>
      <button
        className="rounded-lg bg-slate-500 px-4 py-2 font-medium text-slate-100"
        onClick={handleIncrementCounter}
      >
        Increment
      </button>
    </div>
  );
}
