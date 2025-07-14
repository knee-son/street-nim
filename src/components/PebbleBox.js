import React, { useState } from 'react';
import Pebble from './Pebble.js';

export default function PebbleBox({ heap, selected, onToggle, heapIndex }) {
  let gridCols = 'grid-cols-6';
  if (count === 4) gridCols = 'grid-cols-4';
  let enabled = selected.heap === -1 || selected.heap === heapIndex;

  return (
    <div
      className="
        w-[30vw]
        min-w-[300px]
        max-w-[380px]
        aspect-[946/673]
        p-4
      "
      style={{
        backgroundImage: `url("/images/box.png")`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <div className={`grid ${gridCols} place-items-center content-center items-stretch h-full gap-y-8`}>
        {Array.from({ length: count }).map((_, pIdx) => (
          <Pebble
            key={pIdx}
            className={`${
              pIdx >= 3 && count === 5 ? 'col-span-3' : 'col-span-2'
            }`}
            heapIndex={heapIndex}
            pebbleIndex={pIdx}
            selected={selectedPebbles.includes(pIdx)}
            onToggle={onToggle}
          />
        ))}
      </div>
    </div>
  );
}