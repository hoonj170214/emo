import React from 'react';
import Header from '../Components/Header';
import { useLocation } from 'react-router-dom';
import useDataFetcher from '../Hooks/useDataFetcher';

function DriverSeat() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get('q') || '';
  const data = useDataFetcher(query);

  return (
    <div>
      <Header text={'자리를 보여드릴게요'} />
      {data.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </div>
  );
}

export default DriverSeat;
