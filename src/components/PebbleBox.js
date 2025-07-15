import React, { useState } from 'react';
import Pebble from './Pebble.js';

import box from '../images/box.png';

export default function PebbleBox({ heap, selected, onToggle, heapIndex }) {
  const count = heap.length;
  let gridCols = 'grid-cols-6';
  if (count === 4) gridCols = 'grid-cols-4';
  const enabled = selected.heap === -1 || selected.heap === heapIndex;

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
        backgroundImage: `url(${box})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <div className={`
        grid ${gridCols}
        place-items-center content-center items-stretch h-full gap-y-8
      `}>
        {heap.map((pIdx) => (
          <div 
            className={`${
              pIdx >= 3 && count === 5 ? 'col-span-3' : 'col-span-2'
            }`}
            key={pIdx}
          >
            <Pebble
              heapIndex={heapIndex}
              pebbleIndex={pIdx}
              selected={selected.pebbles.includes(pIdx)}
              onToggle={onToggle}
            />
          </div>
        ))}
      </div>
    </div>
  );
}