import React from 'react';
import { getImgById, imgList } from '../util';

function GetImg({ prop }) {
  return (
    <div>
      <div>
        {/***  {imgList.filter((it) => (
          <img key={it.id} src={it.img} alt={`img${it.id}`} />
      ))}{' '} **/}
      </div>
    </div>
  );
}

export default GetImg;
