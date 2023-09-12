import React, { useEffect, useState } from 'react';
import GetImg from '../Components/GetImg';

function DriverStation() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const key = `serviceKey=97eabseJjXsRuTOaYAkcZ%2FPXibvwipHJKBay3VS%2BDW6STV5QjDDoxIsPxGdK1KCaBMV3MFoR8T%2BSt3JvufMhSg%3D%3D`;
      const apiUrl = `https://api.odcloud.kr/api/EvInfoServiceV2/v1/getEvSearchList?page=1&perPage=10&returnType=JSON&${key}`;
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('데이터를 가져오는데 문제가 있습니다.');
        }
        const result = await response.json();
        setData(result.data);
      } catch (error) {
        console.error('에러발생 : ', error);
      }
      // 쌤이 작성해주신 코드
      //const responsData = await result.then((result) => result.data);
      //setData(responsData);
    };
    fetchData();
  }, []);

  return <div></div>;
}

export default DriverStation;
