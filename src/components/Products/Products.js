// #region L041
import bed1 from './img/L041/bed1.jpg';
import bed2 from './img/L041/bed2.jpg';
import bed3 from './img/L041/bed3.jpg';
import bed4 from './img/L041/bed4.jpg';
import bed5 from './img/L041/bed5.jpg';
import bed6 from './img/L041/bed6.jpg';
import bed7 from './img/L041/bed7.jpg';
import bed8 from './img/L041/bed8.jpg';
import bed9 from './img/L041/bed9.jpg';
import bed10 from './img/L041/bed10.jpg';
import bed11 from './img/L041/bed11.jpg';
import bed12 from './img/L041/bed12.jpg';
// #endregion

// #region L031
import curly1 from './img/L031/curly1.jpg';
import curly2 from './img/L031/curly2.jpg';
import curly3 from './img/L031/curly3.jpg';
import curly4 from './img/L031/curly4.jpg';
import curly5 from './img/L031/curly5.jpg';
import curly6 from './img/L031/curly6.jpg';
import curly7 from './img/L031/curly7.jpg';
import curly8 from './img/L031/curly8.jpg';
import curly9 from './img/L031/curly9.jpg';
import curly10 from './img/L031/curly10.jpg';
import curly11 from './img/L031/curly11.jpg';
import curly12 from './img/L031/curly12.jpg';
import curly13 from './img/L031/curly13.jpg';
import curly14 from './img/L031/curly14.jpg';
// #endregion

// #region Lucy
import lucy1 from './img/Lucy/lucy1.jpg';
import lucy2 from './img/Lucy/lucy2.jpg';
import lucy3 from './img/Lucy/lucy3.jpg';
import lucy4 from './img/Lucy/lucy4.jpg';
import lucy5 from './img/Lucy/lucy5.jpg';
import lucy6 from './img/Lucy/lucy6.jpg';
import lucy7 from './img/Lucy/lucy7.jpg';
import lucy8 from './img/Lucy/lucy8.jpg';
import lucy9 from './img/Lucy/lucy9.jpg';
import lucy10 from './img/Lucy/lucy10.jpg';
import lucy11 from './img/Lucy/lucy11.jpg';
// #endregion

// #region Monica
import monica1 from './img/Monica/monica1.jpg';
import monica2 from './img/Monica/monica2.jpg';
import monica3 from './img/Monica/monica3.jpg';
import monica4 from './img/Monica/monica4.jpg';
import monica5 from './img/Monica/monica5.jpg';
import monica6 from './img/Monica/monica6.jpg';
import monica7 from './img/Monica/monica7.jpg';
import monica8 from './img/Monica/monica8.jpg';
import monica9 from './img/Monica/monica9.jpg';
import monica10 from './img/Monica/monica10.jpg';
import monica11 from './img/Monica/monica11.jpg';
import monica12 from './img/Monica/monica12.jpg';
import monica13 from './img/Monica/monica13.jpg';
import monica14 from './img/Monica/monica14.jpg';
// #endregion

// #region L029
import beige1 from './img/L029/beige1.jpg';
import beige2 from './img/L029/beige2.jpg';
import beige3 from './img/L029/beige3.jpg';
import beige4 from './img/L029/beige4.jpg';
import beige5 from './img/L029/beige5.jpg';
import beige6 from './img/L029/beige6.jpg';
import beige7 from './img/L029/beige7.jpg';
import beige8 from './img/L029/beige8.jpg';
import beige9 from './img/L029/beige9.jpg';
import beige10 from './img/L029/beige10.jpg';
import beige11 from './img/L029/beige11.jpg';
import beige12 from './img/L029/beige12.jpg';
// #endregion

import './Products.css';

const products = [
  {
    id: 1,
    name: 'Ліжко L-041',
    img: bed1,
    additionalImages: [bed2, bed3, bed4, bed5, bed6, bed7, bed8, bed9, bed10, bed11, bed12],
    features: [
      'Розмiр: 1400 x 2000, 1600 x 2000, 1800 x 2000',
      'Каркас: Метал',
      'Підйомний механізм: Пневматично-газовий підйомник',
      'Тканина/Текстура: на вибір покупця'
    ]
  },

  {
    id: 2,
    name: 'Ліжко L-031',
    img: curly1,
    additionalImages: [curly2, curly3, curly4, curly5, curly6, curly7, curly8, curly9, curly10, curly11, curly12, curly13, curly14],
    features: [
      'Розмiр: 1400 x 2000, 1600 x 2000, 1800 x 2000',
      'Каркас: Метал',
      'Підйомний механізм: Пневматично-газовий підйомник',
      'Тканина/Текстура: на вибір покупця'
    ]
  },

  {
    id: 3,
    name: 'Ліжко "Люсі"',
    img: lucy1,
    additionalImages: [lucy2, lucy3, lucy4, lucy5, lucy6, lucy7, lucy8, lucy9, lucy10, lucy11],
    features: [
      'Розмiр: 1400 x 2000, 1600 x 2000, 1800 x 2000',
      'Каркас: Метал',
      'Підйомний механізм: Пневматично-газовий підйомник',
      'Тканина/Текстура: на вибір покупця'
    ]
  },

  {
    id: 4,
    name: 'Ліжко "Моніка"',
    img: monica1,
    additionalImages: [monica2, monica3, monica4, monica5, monica6, monica7, monica8, monica9, monica10, monica11, monica12, monica13, monica14],
    features: [
      'Розмiр: 1400 x 2000, 1600 x 2000, 1800 x 2000',
      'Каркас: Метал',
      'Підйомний механізм: Пневматично-газовий підйомник',
      'Тканина/Текстура: на вибір покупця'
    ]
  },

  {
    id: 5,
    name: 'Ліжко L-029',
    img: beige1,
    additionalImages: [beige2, beige3, beige4, beige5, beige6, beige7, beige8, beige9, beige10, beige11, beige12],
    features: [
      'Розмiр: 1400 x 2000, 1600 x 2000, 1800 x 2000',
      'Каркас: Метал',
      'Підйомний механізм: Пневматично-газовий підйомник',
      'Тканина/Текстура: на вибір покупця'
    ]
  },
];

export default products;
