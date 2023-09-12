import React from 'react';
import ChargeSeat from '../Components/ChargeSeat';

function driverHome() {
  return (
    <div>
      <chargeSeat
        text={'버튼'}
        onClick={() => {
          alert('hi');
        }}
      />
    </div>
  );
}

export default driverHome;
