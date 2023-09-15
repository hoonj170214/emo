import React, { useState } from 'react';
import { Form, useLocation, useNavigate } from 'react-router-dom';

function DriverHome() {
  const [searchText, setSearchText] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const handleSearch = () => {
    if (searchText.trim() !== '') {
      navigate(`${searchText}`);
    }
  };
  return (
    <div class='flex flex-wrap justify-center mx-7'>
      <input
        class='flex flex-auto items-center	 justify-center	w-4/5 bg-slate-50 py-5 rounded-3xl my-7 drop-shadow text-center	text-gray-900'
        placeholder='충전소의 주소를 입력해주세요'
        type='text'
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button onClick={handleSearch}>검색</button>
    </div>
  );
}

export default DriverHome;
