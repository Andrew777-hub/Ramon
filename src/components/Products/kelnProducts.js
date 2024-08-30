// #region Tumby
import tumba1 from './imgK/tumby/tumba1.jpg';
import tumba2 from './imgK/tumby/tumba2.jpg';
import tumba3 from './imgK/tumby/tumba3.jpg';
import tumba4 from './imgK/tumby/tumba4.jpg';
import tumba5 from './imgK/tumby/tumba5.jpg';
import tumba6 from './imgK/tumby/tumba6.jpg';
import tumba7 from './imgK/tumby/tumba7.jpg';
import tumba8 from './imgK/tumby/tumba8.jpg';
import tumba9 from './imgK/tumby/tumba9.jpg';
import tumba10 from './imgK/tumby/tumba10.jpg';
import tumba11 from './imgK/tumby/tumba11.jpg';
import tumba12 from './imgK/tumby/tumba12.jpg';
import tumba13 from './imgK/tumby/tumba13.jpg';
// #endregion

// #region Komody
import komod1 from './imgK/komody/komod1.jpg';
import komod2 from './imgK/komody/komod2.jpg';
import komod3 from './imgK/komody/komod3.jpg';
import komod4 from './imgK/komody/komod4.jpg';
import komod5 from './imgK/komody/komod5.jpg';
import komod6 from './imgK/komody/komod6.jpg';
import komod7 from './imgK/komody/komod7.jpg';
import komod8 from './imgK/komody/komod8.jpg';
import komod9 from './imgK/komody/komod9.jpg';
import komod10 from './imgK/komody/komod10.jpg';
import komod11 from './imgK/komody/komod11.jpg';
import komod12 from './imgK/komody/komod12.jpg';
// #endregion

// #region ToiletTable
import tTable1 from './imgK/toiletTable/tTable1.jpg';
import tTable2 from './imgK/toiletTable/tTable2.jpg';
import tTable3 from './imgK/toiletTable/tTable3.jpg';
import tTable4 from './imgK/toiletTable/tTable4.jpg';
import tTable5 from './imgK/toiletTable/tTable5.jpg';

import console1 from './imgK/toiletTable/console1.jpg';
import console2 from './imgK/toiletTable/console2.jpg';
import console3 from './imgK/toiletTable/console3.jpg';
// #endregion

// #region Shafy
import shafa1 from './imgK/shafy/shafa1.jpg';
import shafa2 from './imgK/shafy/shafa2.jpg';
import shafa3 from './imgK/shafy/shafa3.jpg';

import shafa4 from './imgK/shafy/shafa4.jpg';
import shafa5 from './imgK/shafy/shafa5.jpg';

import shafa6 from './imgK/shafy/shafa6.jpg';
import shafa7 from './imgK/shafy/shafa7.jpg';
// #endregion

import './Products.css';

const kelnProducts = [
  {
    id: 30,
    name: 'Тумба приліжкова "Кельн"',
    img: tumba1,
    additionalImages: [tumba2, tumba3, tumba4, tumba5, tumba6, tumba7, tumba8, tumba9, tumba10, tumba11, tumba12, tumba13],
    category: 'Приліжкові тумби',
    categoryRu: 'Nightstands',
    features: [
      'Каркас: Метал',
      'Матеріал: ДСП вищої категорії',
      'Розміри: Ш 500 х В 471 х Г410',
      'Колір: "Бiлий перл", "Глиняний сiрий", "Кобальт", "Шиншила", "Кашемiр"'
    ]
  },
  {
    id: 31,
    name: 'Комод "Кельн"',
    img: komod1,
    additionalImages: [komod2, komod3, komod4, komod5, komod6, komod7],
    category: 'Комоди',
    categoryRu: 'Dressers',
    features: [
      'Каркас: Метал',
      'Матеріал: ДСП вищої категорії',
      'Розміри: Ш 900 х В 880 х Г508',
      'Колір: "Бiлий перл", "Глиняний сiрий", "Кобальт", "Шиншила", "Кашемiр"'
    ]
  },

  {
    id: 35,
    name: 'Комод високий "Кельн"',
    img: komod8,
    additionalImages: [komod9, komod10, komod11, komod12],
    category: 'Комоди',
    categoryRu: 'Dressers',
    features: [
      'Каркас: Метал',
      'Матеріал: ДСП вищої категорії',
      'Розміри: Ш 650 х В 1200 х Г508',
      'Колір: "Бiлий перл", "Кашемiр", "Шиншила"'
    ]
  },
  {
    id: 36,
    name: 'Столик туалетний "Кельн"',
    img: tTable1,
    additionalImages: [tTable2, tTable3, tTable4, tTable5],
    category: 'Туалетні столики',
    categoryRu: 'Vanity Tables',
    features: [
      'Каркас: Метал',
      'Матеріал: ДСП вищої категорії',
      'Розміри: Ш 1003 х В 785 х Г 510',
      'Колір: "Бiлий перл", "Глиняний сiрий", "Кобальт", "Шиншила", "Кашемiр"'
    ]
  },
  {
    id: 37,
    name: 'Консоль "Кельн"',
    img: console1,
    additionalImages: [console2, console3],
    category: 'Туалетні столики',
    categoryRu: 'Vanity Tables',
    features: [
      'Каркас: Метал',
      'Матеріал: ДСП вищої категорії',
      'Розміри: Ш 1003 х В 171 х Г 362',
      'Колір: "Глиняний сiрий", "Шиншила",'
    ]
  },

  {
    id: 32,
    name: 'Шафа 2-дв "Кельн"',
    img: shafa6,
    additionalImages: [shafa7],
    category: 'Шафи',
    categoryRu: 'Wardrobes',
    features: [
      'Каркас: Метал',
      'Матеріал: ДСП вищої категорії',
      'Розміри: Ш 1077 х В 2102 х Г560',
      'Колір: "Глиняний сiрий", "Кобальт", "Шиншила", "Кашемiр"'
    ]
  },
  {
    id: 33,
    name: 'Шафа 3-дв "Кельн"',
    img: shafa1,
    additionalImages: [shafa2, shafa3],
    category: 'Шафи',
    categoryRu: 'Wardrobes',
    features: [
      'Каркас: Метал',
      'Матеріал: ДСП вищої категорії',
      'Розміри: Ш 1610 х В 2102 х Г560',
      'Колір: "Глиняний сiрий", "Кобальт", "Шиншила", "Кашемiр"'
    ]
  },
  {
    id: 34,
    name: 'Шафа 4-дв "Кельн"',
    img: shafa4,
    additionalImages: [shafa5],
    category: 'Шафи',
    categoryRu: 'Wardrobes',
    features: [
      'Каркас: Метал',
      'Матеріал: ДСП вищої категорії',
      'Розміри: Ш 2143 х В 2102 х Г561',
      'Колір: "Глиняний сiрий", "Кобальт", "Шиншила", "Кашемiр"'
    ]
  },

  
  
];

export default kelnProducts;
