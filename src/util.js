import bag from './img/bag.png';
import company from './img/company.png';
import home from './img/home.png';
import userThumbnailMan from './img/userThumbnail1.png';
import userThumbnailWoman from './img/userThumbnail2.png';
import car from './img/car.png';

export const getImgById = (id) => {
  const targetImgId = String(id);
  switch (targetImgId) {
    case '1':
      return company;
    case '2':
      return bag;
    case '3':
      return home;
    case '4':
      return car;
  }
};

export const getThumbnailById = (id) => {
  const targetThumbnailId = String(id);
  switch (targetThumbnailId) {
    case 'male':
      return userThumbnailMan;
    case 'female':
      return userThumbnailWoman;
  }
};

export const imgList = [
  {
    // 공공기관
    id: 1,
    img: getImgById(1),
  },
  {
    // 회사
    id: 2,
    img: getImgById(2),
  },
  {
    // 집
    id: 3,
    img: getImgById(3),
  },
];

export const thumbnailList = [
  {
    // 남자 썸네일
    id: 1,
    img: getThumbnailById(1),
  },
  {
    // 여자 썸네일
    id: 2,
    img: getThumbnailById(2),
  },
];
