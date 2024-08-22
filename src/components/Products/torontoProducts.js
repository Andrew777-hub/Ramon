// #region Tumby
import tumba1 from './imgT/tumby/tumba1.jpg';
import tumba2 from './imgT/tumby/tumba2.jpg';
import tumba3 from './imgT/tumby/tumba3.jpg';
import tumba4 from './imgT/tumby/tumba4.jpg';
import tumba5 from './imgT/tumby/tumba5.jpg';
import tumba6 from './imgT/tumby/tumba6.jpg';
import tumba7 from './imgT/tumby/tumba7.jpg';
import tumba8 from './imgT/tumby/tumba8.jpg';
import tumba9 from './imgT/tumby/tumba9.jpg';
import tumba10 from './imgT/tumby/tumba10.jpg';
import tumba11 from './imgT/tumby/tumba11.jpg';
import tumba12 from './imgT/tumby/tumba12.jpg';
import tumba13 from './imgT/tumby/tumba13.jpg';
import tumba14 from './imgT/tumby/tumba14.jpg';
import tumba15 from './imgT/tumby/tumba15.jpg';

// #endregion

// #region Komody
import komod1 from './imgT/komody/komod1.jpg';
import komod2 from './imgT/komody/komod2.jpg';
import komod3 from './imgT/komody/komod3.jpg';
import komod4 from './imgT/komody/komod4.jpg';
import komod5 from './imgT/komody/komod5.jpg';
import komod6 from './imgT/komody/komod6.jpg';
import komod7 from './imgT/komody/komod7.jpg';
import komod8 from './imgT/komody/komod8.jpg';
import komod9 from './imgT/komody/komod9.jpg';
import komod10 from './imgT/komody/komod10.jpg';
import komod11 from './imgT/komody/komod11.jpg';
// #endregion

// #region tvTumby
import tvTumba1 from './imgT/tvTumby/tvTumba1.jpg';
import tvTumba2 from './imgT/tvTumby/tvTumba2.jpg';
import tvTumba3 from './imgT/tvTumby/tvTumba3.jpg';
// #endregion

// #region toiletTable
import tTable1 from './imgT/toiletTable/tTable1.jpg';
import tTable2 from './imgT/toiletTable/tTable2.jpg';
import tTable3 from './imgT/toiletTable/tTable3.jpg';
import tTable4 from './imgT/toiletTable/tTable4.jpg';
import tTable5 from './imgT/toiletTable/tTable5.jpg';

import console1 from './imgT/toiletTable/console1.jpg';
import console2 from './imgT/toiletTable/console2.jpg';
import console3 from './imgT/toiletTable/console3.jpg';
// #endregion

// #region Shafy
import shafa1 from './imgT/shafy/shafa1.jpg';
import shafa2 from './imgT/shafy/shafa2.jpg';
import shafa3 from './imgT/shafy/shafa3.jpg';
import shafa4 from './imgT/shafy/shafa4.jpg';
import shafa5 from './imgT/shafy/shafa5.jpg';

// #endregion

import './Products.css';

const torontoProducts = [
  {
    id: 19,
    name: 'Тумба приліжкова "Торонто"',
    price: '7 050 - 7 230₴',
    img: tumba1,
    additionalImages: [tumba2, tumba3, tumba4, tumba5, tumba6, tumba7, tumba8, tumba9, tumba10, tumba11, tumba12, tumba13, tumba14, tumba15],
    category: 'Приліжкові тумби',
    categoryRu: 'Nightstands',
    description: 'This is a unique description for Toronto Product 1.',
    features: [
      'Каркас: Метал',
      'Матеріал: ДСП вищої категорії',
      'Розміри: Ш 550 х В 450 х Г406',
      'Колір: "Бiлий перл", "Глиняний сiрий", "Шиншила", "Кашемiр"'
    ]
  },
  
  {
    id: 20,
    name: 'Комод "Торонто"',
    price: '13 610 - 14 140₴',
    img: komod1,
    additionalImages: [komod2, komod3, komod4, komod5, komod6, komod7, komod8, komod9, komod10, komod11],
    category: 'Комоди',
    categoryRu: 'Dressers',
    description: 'This is a unique description for Toronto Product 2.',
    features: [
      'Каркас: Метал',
      'Матеріал: ДСП вищої категорії',
      'Розміри: Ш 1000 х В 820 х Г504',
      'Колір: "Бiлий перл", "Глиняний сiрий", "Шиншила"'
    ]
  },

  {
    id: 24,
    name: 'Тумба ТВ "Торонто" (закрита)',
    price: '11 580 - 12 010₴',
    img: tvTumba1,
    additionalImages: [tvTumba2, tvTumba3],
    category: 'ТВ тумби',
    categoryRu: 'TV Stands',
    description: 'This is a unique description for Toronto Product 2.',
    features: [
      'Каркас: Метал',
      'Матеріал: ДСП вищої категорії',
      'Розміри: Ш 1599 х В 490 х Г406',
      'Колір: "Глиняний сiрий", "Шиншила"'
    ]
  },

  {
    id: 25,
    name: 'Столик туалетний "Торонто"',
    price: '10 880 - 11 100₴',
    img: tTable1,
    additionalImages: [tTable2, tTable3, tTable4, tTable5],
    category: 'Туалетні столики',
    categoryRu: 'Vanity Tables',
    description: 'This is a unique description for Toronto Product 2.',
    features: [
      'Каркас: Метал',
      'Матеріал: ДСП вищої категорії',
      'Розміри: Ш 1003 х В 765 х Г511',
      'Колір: "Глиняний сiрий", "Шиншила"'
    ]
  },

  {
    id: 26,
    name: 'Консоль "Торонто"',
    price: '6 190₴',
    img: console1,
    additionalImages: [console2, console3],
    category: 'Туалетні столики',
    categoryRu: 'Vanity Tables',
    description: 'This is a unique description for Toronto Product 2.',
    features: [
      'Каркас: Метал',
      'Матеріал: ДСП вищої категорії',
      'Розміри: Ш 1003 х В 151 х Г363',
      'Колір: "Глиняний сiрий", "Шиншила"'
    ]
  },

  
  {
    id: 21,
    name: 'Шафа 2-дв "Торонто"',
    price: '14 320 - 15 320₴',
    img: tumba1,
    additionalImages: [tumba2, tumba3],
    category: 'Шафи',
    categoryRu: 'Wardrobes',
    description: 'This is a unique description for Toronto Product 2.',
    features: [
      'Каркас: Метал',
      'Матеріал: ДСП вищої категорії',
      'Розміри: Ш 1135 х В 2100 х Г500',
      'Колір: "Бiлий перл", "Глиняний сiрий", "Шиншила"'
    ]
  },


  {
    id: 22,
    name: 'Шафа 3-дв "Торонто"',
    price: '19 170 - 21 200₴',
    img: shafa1,
    additionalImages: [shafa2, shafa3, shafa4, shafa5],
    category: 'Шафи',
    categoryRu: 'Wardrobes',
    description: 'This is a unique description for Toronto Product 2.',
    features: [
      'Каркас: Метал',
      'Матеріал: ДСП вищої категорії',
      'Розміри: Ш 1135 х В 2100 х Г500',
      'Колір: "Бiлий перл", "Глиняний сiрий", "Шиншила"'
    ]
  },

  

  

];

export default torontoProducts;
