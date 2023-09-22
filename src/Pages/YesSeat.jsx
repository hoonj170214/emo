import React from 'react';
import good from '../img/good.png';
import Header from '../Components/Header';

function YesSeat() {
  return (
    <div class='flex flex-col text-center text-3xl '>
      <Header />
      <img src={good} alt='good' />
      <p class='p-8'>충전소 이름</p>
      <p class='p-8 text-green-700'>
        <strong>충전가능</strong>
      </p>
      <p class='p-8'>충전량 : 13kw</p>
    </div>
  );
}

export default YesSeat;
