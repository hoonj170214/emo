import React from 'react';
import car from '../img/car.png';
function HomeButton() {
  return (
    <div class='flex justify-center items-center h-screen'>
      <button class='bg-green-500 w-4/5 h-40vw my-80 rounded-3xl drop-shadow-md'>
        <div class='flex flex-col items-center justify-center h-full'>
          <div class='w-7/10  text-center font-bold font-sans text-4xl	m-2 text-white drop-shadow-md mt-6'>
            버튼 1
          </div>
          <div class='w-3/10 flex items-center justify-center drop-shadow-md'>
            <img
              class='max-h-full max-w-full'
              src={car}
              alt='자동차 이모티콘'
            />
          </div>
        </div>
      </button>
    </div>
  );
}

export default HomeButton;
