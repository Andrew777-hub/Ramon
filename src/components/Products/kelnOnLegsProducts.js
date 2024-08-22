// #region Tumby
import tumba1 from './imgKL/tumby/tumba1.jpg';
import tumba2 from './imgKL/tumby/tumba2.jpg';
import tumba3 from './imgKL/tumby/tumba3.jpg';
import tumba4 from './imgKL/tumby/tumba4.jpg';
import tumba5 from './imgKL/tumby/tumba5.jpg';
import tumba6 from './imgKL/tumby/tumba6.jpg';
import tumba7 from './imgKL/tumby/tumba7.jpg';
import tumba8 from './imgKL/tumby/tumba8.jpg';
// #endregion

// #region Komody
import komod1 from './imgKL/komody/komod1.jpg';
import komod2 from './imgKL/komody/komod2.jpg';
import komod3 from './imgKL/komody/komod3.jpg';
import komod4 from './imgKL/komody/komod4.jpg';
import komod5 from './imgKL/komody/komod5.jpg';
import komod6 from './imgKL/komody/komod6.jpg';
// #endregion

import './Products.css';

const kelnOnLegsProducts = [
  {
    id: 39,
    name: 'Тумба приліжкова "Кельн" (високі ніжки)',
    price: '5 090 - 5 200₴',
    img: tumba1,
    additionalImages: [tumba2, tumba3, tumba4, tumba5, tumba6, tumba7, tumba8],
    category: 'Приліжкові тумби',
    categoryRu: 'Nightstands',
    description: 'This is a unique description for Keln On Legs Product 1.',
    features: [
      'Каркас: Метал',
      'Матеріал: ДСП вищої категорії',
      'Розміри: Ш 500 х В 470 х Г408',
      'Колір: "Рокфорд гiкорi", "Ясен кала"'
    ]
  },
  {
    id: 40,
    name: 'Комод "Кельн" (високі ніжки)',
    price: '11 260 - 11 540₴',
    img: komod1,
    additionalImages: [komod2, komod3, komod4, komod5, komod6],
    category: 'Комоди',
    categoryRu: 'Dressers',
    description: 'This is a unique description for Keln On Legs Product 2.',
    features: [
      'Каркас: Метал',
      'Матеріал: ДСП вищої категорії',
      'Розміри: Ш 900 х В 900 х Г408',
      'Колір: "Рокфорд гiкорi", "Ясен кала"'
    ]
  },
];

export default kelnOnLegsProducts;
