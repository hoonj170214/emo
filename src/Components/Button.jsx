import React from 'react';

function Button({ isCharged, num, onClick }) {
  const type = ['able', 'disable'];
  if (!isCharged) {
    return (
      <div class='flex'>
        <button
          class='bg-green-500 flex-1	text-lg	font-sans	 font-bold text-white	whitespace-pre-wrap px-20 py-2 m-3 items-center	justify-center	rounded-xl drop-shadow	'
          onClick={onClick}
          type='able'
        >
          {num}
        </button>
      </div>
    );
  } else {
    return (
      <div class='flex'>
        <button
          class='bg-gray-300 flex-1	text-lg	font-sans	 font-bold text-white	whitespace-pre-wrap px-20 py-2 m-3 items-center justify-center	rounded-xl drop-shadow	'
          type='disable'
        >
          {num}
        </button>
      </div>
    );
  }
}

export default Button;
