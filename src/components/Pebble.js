import React, { useRef } from 'react';

import pebble0 from '../images/pebble_0.png';
import pebble1 from '../images/pebble_1.png';
import pebble2 from '../images/pebble_2.png';
import pebble3 from '../images/pebble_3.png';
import pebble4 from '../images/pebble_4.png';
import pebble5 from '../images/pebble_5.png';

export default function Pebble({ heapIndex, pebbleIndex, selected, onToggle }) {
  const pebbleImages = [pebble0, pebble1, pebble2, pebble3, pebble4, pebble5];

  const imageIndex = useRef(Math.floor(Math.random() * 6));
  const rawRotation = Math.random() * 6;
  const rotation = useRef(Math.floor(rawRotation) * 30);

  const imagePath = pebbleImages[imageIndex.current];

  return (
    <div
      onClick={() => onToggle(heapIndex, pebbleIndex)}
      className='w-[80px] h-[80px] rounded-full cursor-pointer flex items-center justify-center'
    >
      <img
        src={imagePath}
        alt={`Pebble ${imageIndex}`}
        className={`
          w-[5vw] h-[5vw]
          min-w-[60px] min-h-[60px]
          max-w-[80px] max-h-[80px]
          absolute
          transition-all
          ${selected ? 'brightness-50' : ''}
        `}
        style={{ transform: `rotate(${rotation.current}deg)` }}
        draggable={false}
      />
    </div>
  );
}