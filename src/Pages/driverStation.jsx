import React, { useEffect, useState } from 'react';
import useDataFetcher from '../Hooks/useDataFetcher';
import Header from '../Components/Header';
function DriverStation() {
  const data = useDataFetcher();
  return (
    <div>
      <Header text={'충전소를 보여드릴게요'}></Header>
    </div>
  );
}

export default DriverStation;
