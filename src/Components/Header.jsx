import React from 'react';
import { useNavigate } from 'react-router-dom';

function Header({ text }) {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <div class='flex my-5'>
      <button class='flex-none font-bold text-2xl mx-7' onClick={goBack}>
        {'<'}
      </button>
      <div class='flex-1 font-bold text-2xl'>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default Header;
