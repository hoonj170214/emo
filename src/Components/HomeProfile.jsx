import React from 'react';
import thumbnail from '../img/userThumbnail1.png';

function HomeProfile() {
  return (
    <div class='bg-green-500 h-36 drop-shadow-md'>
      <div class='flex flex-row p-6'>
        <div class='flex ml-5 mt-3 '>
          <button class='w-16  bg-gray-100 rounded-2xl '>
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
    </div>
  );
}

export default HomeProfile;
