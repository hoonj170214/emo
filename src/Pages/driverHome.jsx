import React, { useEffect, useState } from 'react';
import { Form, useLocation, useNavigate, useParams } from 'react-router-dom';
import useDataFetcher from '../Hooks/useDataFetcher';
import StationProfil from '../Components/StationProfil';
function DriverHome() {
  const [searchText, setSearchText] = useState('');
  const navigate = useNavigate();
  const { q } = useParams();
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
  useEffect(() => {
    if (q) {
      setSearchText(q);
    }
  }, [q]);
  console.log(q);

  const uniqueData = [
    ...new Set(data.map((item) => `${item.csNm} : ${item.addr} `)),
  ];
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
      <StationProfil 
        {data.map((item) => (
          <div key={item.id}>
            <p> {item.csNm}</p>
            <p> {item.addr}</p>
          </div>
        ))}
        >
      </StationProfil>
    </div>
  );
}

export default DriverHome;
