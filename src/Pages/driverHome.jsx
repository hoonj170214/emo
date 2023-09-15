import React from 'react';
import Header from '../Components/Header';
import Seat from '../Components/Seat';

function DriverHome() {
  return (
    <div>
      <Header text={'자리를 알려드릴게요'}></Header>
      <Seat
        isCharged={true}
        num={'1번 자리'}
        onClick={() => {
          alert('hi');
        }}
      />
      <Seat
        isCharged={false}
        num={'2번 자리'}
        onClick={() => {
          alert('hi');
        }}
      />
      <Seat
        isCharged={true}
        num={'3번 자리'}
        onClick={() => {
          alert('hi');
        }}
      />
    </div>
  );
}

export default DriverHome;
