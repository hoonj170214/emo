import React, { useState } from 'react';
import thumbnail from '../img/userThumbnail1.png';

function HomeProfile() {
  const [isManage, setIsManage] = useState(false);
  const HandleOnClickDriver = () => {
    setIsManage(false);
  };
  const handleOnClickAdmin = () => {
    setIsManage(true);
  };
  return (
    <div
      id='HomeProfile'
      className={isManage ? 'bg-red-400 pb-5' : 'bg-green-500 pb-5'}
    >
      <div class='flex flex-row p-6'>
        <div class='flex ml-5 mt-3 '>
          <button class='w-16  bg-gray-100 rounded-2xl drop-shadow'>
            <img
              src={thumbnail}
              alt='thumbnail_man'
              class='w-14 pl-2 justify-center items-center'
            />
          </button>
        </div>
        <div class='flex flex-col p-3'>
          <p class='text-emerald-100 pb-1'>
            <strong>장성훈님</strong> 안녕하세요!
          </p>
          <p class='text-emerald-100'>
            <strong>운전자</strong>
          </p>
        </div>
      </div>
      <div class='flex items-center justify-center '>
        <p
          class='pr-5 decoration-4 decoration-solid '
          onClick={HandleOnClickDriver}
        >
          <strong>운전자</strong>
        </p>
        <p class='pl-5' onClick={handleOnClickAdmin}>
          관리자
        </p>
      </div>
    </div>
  );
}

export default HomeProfile;
