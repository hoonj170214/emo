import React, { useEffect, useState } from 'react';
import useDataFetcher from '../Hooks/useDataFetcher';
import Header from '../Components/Header';
import home from '../img/home.png';
import { Link } from 'react-router-dom';

function DriverStation() {
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [data, setData] = useState();

  const handleSearch = () => {
    if (searchText.trim() !== '') {
      const fetchData = async () => {
        const key = `serviceKey=97eabseJjXsRuTOaYAkcZ%2FPXibvwipHJKBay3VS%2BDW6STV5QjDDoxIsPxGdK1KCaBMV3MFoR8T%2BSt3JvufMhSg%3D%3D`;
        const apiUrl = `https://api.odcloud.kr/api/EvInfoServiceV2/v1/getEvSearchList?page=1&perPage=10&returnType=JSON&${key}&cond%5Baddr%3A%3ALIKE%5D=${searchText}`;
        try {
          const response = await fetch(apiUrl);
          if (!response.ok) {
            throw new Error('데이터를 가져오는데 문제가 있습니다.');
          }
          const result = await response.json();
          console.log(result);
          setData(result.data);
        } catch (error) {
          console.error('에러발생 : ', error);
        }
      };
      fetchData(searchText);
    }
  };

  return (
    <div>
      <div>
        <Header text={'충전소를 보여드릴게요'}></Header>
        {/* <input
          type='text'
          value={searchText}
          // 입력된 텍스트를 상태에 업데이트
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        /> */}
      </div>
      <div class='flex flex-wrap justify-center mx-7'>
        <div class='flex flex-row flex-wrap'>
          <input
            class='flex flex-1 items-center	 justify-center	w-4/5 bg-slate-50 py-5 rounded-3xl my-7 drop-shadow text-center	text-gray-900'
            placeholder='충전소 주소'
            type='text'
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            class='flex flex-1 items-center	 justify-center w-1/5 drop-shadow text-center	text-gray-900 bg-slate-50 px-1 py-4 rounded-3xl mx-3 my-7'
            onClick={handleSearch}
          >
            검색
          </button>
        </div>
        {/* {data.map((item) => (
            <StationProfil key={item.csId} csNm={item.csNm} addr={item.addr} />
          ))} */}
        {data && (
          <div>
            <ul>
              <div>
                {data.map((item) => (
                  <button class='bg-gray-300 rounded-3xl m-10 drop-shadow flex max-h-33'>
                    <Link to='/SeatList'>
                      <div class='flex flex-row'>
                        <div class='bg-gray-100 rounded-full flex-initial w-1/4 p-3 m-3'>
                          <img
                            src={home}
                            alt='bag'
                            class='flex-initial w-11/12 justify-center	'
                          />
                        </div>
                        <div class='flex flex-col mx-4 items-start'>
                          <li key={item.id}>{item.name}</li>
                          <p class='font-bold my-3 flex-nowrap max-h-5 overflow-hidden whitespace-nowrap'>
                            {item.csNm}
                          </p>
                          <p class='mb-3 max-h-5 overflow-hidden '>
                            {item.addr}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </button>
                ))}
              </div>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default DriverStation;
