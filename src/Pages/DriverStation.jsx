import React, { useEffect, useState } from 'react';
import GetImg from '../Components/GetImg';

function DriverStation() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const key = `serviceKey=97eabseJjXsRuTOaYAkcZ%2FPXibvwipHJKBay3VS%2BDW6STV5QjDDoxIsPxGdK1KCaBMV3MFoR8T%2BSt3JvufMhSg%3D%3D`;
      const addr = `{}`;
      const res = await fetch(
        `https://api.odcloud.kr/api/EvInfoServiceV2/v1/getEvSearchList?page=1&perPage=10&returnType=JSON&${key}`
      );
      const result = res.json();
      console.log(result);
      const responsData = await result.then((result) => result.data);
      console.log(responsData);
      setData(responsData);
    };
    fetchData();
    console.log(data);
  }, []);

  console.log(data);
  return <div>{data && <p>{JSON.stringify(data, null, 2)}</p>}</div>;
}

export default DriverStation;
