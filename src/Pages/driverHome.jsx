import React from 'react';
import Header from '../Components/Header';
import HomeButton from '../Components/HomeButton';
import StationProfil from '../Components/StationProfil';

function DriverHome() {
  return (
    <div>
      <div class='flex justify-center mx-7'>
        <input
          class='flex flex-auto items-center	 justify-center	w-4/5 bg-slate-50 py-5 rounded-3xl my-7 drop-shadow text-center	text-gray-900'
          placeholder='충전소를 입력해주세요'
        />
      </div>
      <HomeButton />
      <StationProfil />
      <Header text={'자리를 알려드릴게요'}></Header>
    </div>
  );
}

export default DriverHome;
