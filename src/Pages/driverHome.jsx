import React, { useEffect, useState } from 'react';
import HomeButton from '../Components/HomeButton';
import { useNavigate } from 'react-router-dom';
import HomeProfile from '../Components/HomeProfile';
import SearchButton from '../Components/SearchButton';
import ManagerButton from '../Components/ManagerButton';
function DriverHome() {
  const navigate = useNavigate();
  const navigateStation = () => {
    navigate('/DriverStation');
  };
  const [isAdmin, setIsAdmin] = useState(false);

  const handleOnClickDriver = () => {
    setIsAdmin(true);
  };

  const handleOnClickAdmin = () => {
    setIsAdmin(false);
  };

  return (
    <div>
      <HomeProfile
        onClickAdmin={handleOnClickAdmin}
        onClickDriver={handleOnClickDriver}
        isAdmin={isAdmin}
      />
      {isAdmin ? (
        <div>
          <button
            class='bg-gray-100  w-3/5 m-20 items-center justify-center rounded-xl text-center text-l text-gray-400 p-5 drop-shadow '
            onClick={navigateStation}
          >
            충전소를 입력하세요
          </button>
          <HomeButton onClick={navigateStation} />
        </div>
      ) : (
        <div>
          <button
            class='bg-gray-100  w-3/5 m-20 items-center justify-center rounded-xl text-center text-l text-gray-400 p-5 drop-shadow '
            onClick={navigateStation}
          >
            충전소를 입력하세요
          </button>
          <ManagerButton onClick={navigateStation} />
        </div>
      )}
    </div>
  );
}

export default DriverHome;
