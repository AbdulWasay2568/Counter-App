import { useState, useEffect } from 'react';

export default function CounterApp() {

    const [counts, setCounts] = useState<number[]>([0]);

  const handleIncrement = (index: number) => {
    setCounts(prevCounts => {
      const newCounts = [...prevCounts];
      newCounts[index] = (newCounts[index] || 0) + 1;
      return newCounts;
    });
  };

  const handleDecrement = (index: number) => {
    setCounts(prevCounts => {
      const newCounts = [...prevCounts];
      if (newCounts[index] > 0) {
        newCounts[index] -= 1;
      }
      return newCounts;
    });
  };

  const handleReset = () => {
    setCounts([0]);
  };

  // Ensure the count starts at 0 on page load
  useEffect(() => {
    setCounts([0]);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center gap-4 p-4 bg-slate-700 text-white rounded-lg w-full max-w-xs">
      <h1 className="text-xl font-bold">Counter App</h1>
      <div className="flex gap-3 items-center">
        <button 
          onClick={() => handleIncrement(0)} 
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
        >
          +
        </button>
        <p className="text-xl">{counts[0]}</p>
        <button 
          onClick={() => handleDecrement(0)} 
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
        >
          -
        </button>
      </div>
      <button 
        onClick={handleReset} 
        className="mt-2 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
      >
        Reset
      </button>
    </div>
  );
}
