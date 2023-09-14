import React from 'react';

import home from '../img/home.png';
function StationProfil() {
  return (
    <button class='bg-gray-300 rounded-3xl m-10 drop-shadow flex max-h-33'>
      {/* circle*/}
      <div class='bg-gray-100 rounded-full flex-initial w-1/4 p-3 m-3'>
        <img src={home} alt='bag' class='flex-initial w-11/12 justify-center	' />
      </div>

      <div class='flex flex-col mx-4 items-start'>
        <p class='font-bold my-3 flex-nowrap max-h-5'>우리집</p>
        {/* 제목, 주소는 최대 9글자 권장*/}
        <p class='mb-3 max-h-5'>부산광역시 기장군...</p>
      </div>
    </button>
  );
}

export default StationProfil;
