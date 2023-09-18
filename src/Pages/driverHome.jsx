import React, { useEffect, useState } from 'react';
import HomeButton from '../Components/HomeButton';
import { useNavigate } from 'react-router-dom';
import HomeProfile from '../Components/HomeProfile';
function DriverHome() {
  const navigate = useNavigate();
  const navigateStation = () => {
    navigate('/DriverStation');
  };
  return (
    <div>
      <HomeProfile />
      <HomeButton onClick={navigateStation} />
    </div>
  );
}

export default DriverHome;
