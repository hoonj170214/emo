import React from 'react';
import bad from '../img/bad.png';
import Header from '../Components/Header';
function NoSeat() {
  return (
    <div>
      <Header />
      <img src={bad} alt='주의' class='w-11/12' />
      <div class='flex flex-col text-center text-3xl'>
        <p class='p-5'>충전소 이름</p>
        <p class='p-5 text-red-800 '>
          <strong>차량 있음</strong>
        </p>
        <p class='p-5'>
          <strong>전기차</strong>
        </p>
        <p class='p-5'>
          <strong>56%</strong> 충전
        </p>
        <p class='p-5'>충전량 : 13kw</p>
      </div>
    </div>
  );
}

export default NoSeat;
