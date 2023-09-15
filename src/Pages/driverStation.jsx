import React, { useEffect, useState } from 'react';
import useDataFetcher from '../Hooks/useDataFetcher';
import Header from '../Components/Header';
function DriverStation() {
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  // 검색어가 변경될 때마다 api 호출을 수행
  useEffect(() => {
    if (searchText.trim() !== '') {
    }
  }, [searchText]);

  return (
    <div>
      <Header text={'충전소를 보여드릴게요'}></Header>
      <input
        type='text'
        value={searchText}
        // 입력된 텍스트를 상태에 업데이트
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      />
    </div>
  );
}

export default DriverStation;
