import React from 'react';

function Header({ text }) {
  return (
    <div class='flex my-5'>
      <p class='flex-none font-bold text-2xl mx-7'>{'<'}</p>
      <div class='flex-1 font-bold text-2xl'>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default Header;
