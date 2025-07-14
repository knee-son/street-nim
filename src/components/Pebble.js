import React, { useRef } from 'react';

export default function Pebble({ heapIndex, pebbleIndex, selected, onToggle }) {
  const imageIndex = useRef(Math.floor(Math.random() * 6));
  const rawRotation = Math.random() * 6;
  const rotation = useRef(Math.floor(rawRotation) * 30);
  const imagePath = `/images/pebble_${imageIndex.current}.png`;

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