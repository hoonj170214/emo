import React from 'react';

function ChargeSeat({ text, onClick }) {
  return (
    <div>
      <button class='bg-indigp' onClick={onClick}>
        {text}
      </button>
    </div>
  );
}

export default ChargeSeat;
