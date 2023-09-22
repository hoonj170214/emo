import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Components/Header';
function SeatList() {
  return (
    <div>
      <Header text={'자리를 보여드릴게요'}></Header>
      <div class='flex flex-col justify-center items-center p-3 '>
        <button class='bg-green-400 w-11/12 p-4 my-5 rounded-xl text-center text-xl drop-shadow'>
          <Link to='/YesSeat'>A1</Link>
        </button>
        <button class='bg-gray-300 w-11/12 p-4 my-5 rounded-xl text-center text-xl drop-shadow'>
          <Link to='/NoSeat'> A2</Link>
        </button>
        <button class='bg-green-400 w-11/12 p-4 my-5 rounded-xl text-center text-xl drop-shadow'>
          <Link to='/YesSeat'> A3</Link>
        </button>
        <button class='bg-gray-300 w-11/12 p-4 my-5 rounded-xl text-center text-xl drop-shadow'>
          <Link to='/NoSeat'>A4</Link>
        </button>
        <button class='bg-green-400 w-11/12 p-4 my-5 rounded-xl text-center text-xl drop-shadow'>
          <Link to='/YesSeat'>A5</Link>
        </button>
      </div>
    </div>
  );
}

export default SeatList;
