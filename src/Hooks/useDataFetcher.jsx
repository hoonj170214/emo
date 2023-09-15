import React, { useEffect, useState } from 'react';

function useDataFetcher(searchText) {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const key = `serviceKey=97eabseJjXsRuTOaYAkcZ%2FPXibvwipHJKBay3VS%2BDW6STV5QjDDoxIsPxGdK1KCaBMV3MFoR8T%2BSt3JvufMhSg%3D%3D`;
      const apiUrl = `https://api.odcloud.kr/api/EvInfoServiceV2/v1/getEvSearchList?page=1&perPage=10&returnType=JSON&${key}&cond%5Baddr%3A%3ALIKE%5D=${searchText}`;
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
    };
    fetchData();
  }, []);
  return data;
}

export default useDataFetcher;
