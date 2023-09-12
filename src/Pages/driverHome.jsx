import React from 'react';
import ChargeSeat from '../Components/ChargeSeat';
import Header from '../Components/Header';

function DriverHome() {
  return (
    <div>
      <Header text={'자리를 알려드릴게요'}></Header>
      <ChargeSeat
        isCharged={true}
        num={'1번 자리'}
        onClick={() => {
          alert('hi');
        }}
      />
      <ChargeSeat
        isCharged={false}
        num={'2번 자리'}
        onClick={() => {
          alert('hi');
        }}
      />
      <ChargeSeat
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
