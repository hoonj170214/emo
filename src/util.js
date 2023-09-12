import bag from './img/bag.png';
import company from './img/company.png';
import home from './img/home.png';
import userThumbnailMan from './img/userThumbnail1.png';
import userThumbnailWoman from './img/userThumbnail2.png';

export const getImgById = (id) => {
  const targetImgId = String(id);
  switch (targetImgId) {
    case 'public':
      return company;
    case 'company':
      return bag;
    case 'home':
      return home;
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
