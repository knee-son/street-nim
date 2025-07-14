import React, { useState } from 'react';
import PebbleBox from './components/PebbleBox';

export default function StreetNim() {
  // const initialHeaps = [4, 5, 6];
  const initialHeaps = [
    [0, 1, 2, 3],
    [0, 1, 2, 3, 4],
    [0, 1, 2, 3, 4, 5],
  ];
  const [heaps, setHeaps] = useState(initialHeaps);
  const [selected, setSelected] = useState({
    'heap': -1,
    'pebbles': [],
  });
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [gameOver, setGameOver] = useState(false);
  const [message, setMessage] = useState('');

  const toggleSelect = (heapIndex, pebbleIndex) => {
    console.log(heapIndex, pebbleIndex);
    if (gameOver) return;
    const newSelected = selected.pebbles.map(arr => [...arr]);
    console.log(newSelected);
    const already = newSelected[heapIndex].includes(pebbleIndex);
    if (already) {
      newSelected[heapIndex] = newSelected[heapIndex].filter(i => i !== pebbleIndex);
    } else {
      newSelected[heapIndex].push(pebbleIndex);
    }
    setSelected(newSelected);
  };

  const submitTurn = () => {
    const newHeaps = heaps.map((count, hIdx) => {
      const removeCount = selected[hIdx].length;
      return count - removeCount;
    });
    const totalRemaining = newHeaps.reduce((a, b) => a + b, 0);
    setHeaps(newHeaps);
    setSelected([[], [], []]);
    setCurrentPlayer(3 - currentPlayer);
    if (totalRemaining === 0) {
      setMessage(`Player ${currentPlayer} took the last pebble and loses. Player ${3 - currentPlayer} wins!`);
      setGameOver(true);
    }
  };

  const resetGame = () => {
    setHeaps([0, 0, 0]);
    setHeaps(initialHeaps);
    setSelected([[], [], []]);
    setCurrentPlayer(1);
    setGameOver(false);
    setMessage('');
  };

  return (
    <div className="p-4 max-w-4xl mx-auto flex flex-col items-center justify-center text-center">
      <h1 className="text-3xl font-bold mb-4">StreetNim!</h1>
      {gameOver ? (
        <h2 className="text-lg">{message}</h2>
      ) : (
        <>
          <h2 className="text-lg">Player {currentPlayer}'s turn</h2>
          <div className="flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0 my-8">
            {heaps.map((heap, hIdx) => (
              <PebbleBox
                key={hIdx}
                heap={heap}
                selected={selected}
                onToggle={toggleSelect}
                heapIndex={hIdx}
              />
            ))}
          </div>
        </>
      )}
      <div className="mt-4 flex space-x-2">
        <button
          onClick={submitTurn}
          disabled={gameOver}
          className="px-4 py-2 bg-green-500 text-white rounded disabled:opacity-50"
        >
          Submit Turn
        </button>
        <button
          onClick={resetGame}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          Reset Game
        </button>
      </div>
    </div>
  );
}
