import React from 'react';
import car from '../img/car.png';
import { useNavigate } from 'react-router-dom';
function HomeButton() {
  const navigate = useNavigate();
  const navigateStation = () => {
    navigate('/DriverStation');
  };
  return (
    <div class='flex justify-center items-start h-50 my-0'>
      <button
        class='bg-green-500 w-4/5 h-20vw my-0 rounded-3xl drop-shadow-md'
        onClick={navigateStation}
      >
        <div class='flex flex-col items-center justify-center h-full'>
          <div class='w-7/10  text-center font-bold font-sans text-4xl	m-2 text-white drop-shadow-md mt-6'>
            충전소 검색
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
