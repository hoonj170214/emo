import React from 'react';

function ChargeSeat({ isCharged, num, onClick }) {
  const type = ['able', 'disable'];
  if (!isCharged) {
    return (
      <div class='flex'>
        <button
          class='bg-green-500 flex-1	flex-grow text-lg	font-sans	 font-bold text-white	whitespace-pre-wrap px-20 py-2 m-3 	rounded-xl items-center justify-center drop-shadow	'
          onClick={onClick}
        >
          {num}
        </button>
      </div>
    );
  } else {
    return (
      <div class='flex'>
        <button class='bg-gray-300 flex-1	text-lg	font-sans	 font-bold text-white	whitespace-pre-wrap px-20 py-2 m-3 items-center justify-center	rounded-xl drop-shadow	'>
          {num}
        </button>
      </div>
    );
  }
}

export default ChargeSeat;
