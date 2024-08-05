import img1 from './imgT/tumba1.jpg';
import img2 from './imgT/tumba2.jpg';
import img3 from './imgT/tumba3.jpg';
import img4 from './imgT/tumba4.jpg';
import img5 from './imgT/tumba5.jpg';
import img6 from './imgT/tumba6.jpg';
import img7 from './imgT/tumba7.jpg';
import img8 from './imgT/tumba8.jpg';
import img9 from './imgT/tumba9.jpg';
import img10 from './imgT/tumba10.jpg';
import img11 from './imgT/tumba11.jpg';
import './Products.css';

const torontoProducts = [
  {
    id: 19,
    name: 'Тумба приліжкова торонто',
    price: '$240',
    img: img1,
    additionalImages: [img2, img3],
    category: 'Приліжкові тумби',
    categoryRu: 'Прикроватные тумбы',
    description: 'This is a unique description for Toronto Product 1.',
    features: [
      'Каркас: Дерево',
      'Матеріал: Масив дерева, ДСП',
      'Розміри: 130x60x85 см',
      'Вага: 30 кг',
      'Колір: Темний горіх'
    ]
  },
  {
    id: 20,
    name: 'Комод торонто',
    price: '$250',
    img: img2,
    additionalImages: [img2, img3],
    category: 'Комоди',
    categoryRu: 'Комоды',
    description: 'This is a unique description for Toronto Product 2.',
    features: [
      'Каркас: Дерево',
      'Матеріал: Масив дерева, ДСП',
      'Розміри: 120x55x80 см',
      'Вага: 28 кг',
      'Колір: Світлий горіх'
    ]
  },
  {
    id: 21,
    name: 'Шафа 2-дв торонто',
    price: '$250',
    img: img3,
    additionalImages: [img2, img3],
    category: 'Шафи',
    categoryRu: 'Шкафы',
    description: 'This is a unique description for Toronto Product 2.',
    features: [
      'Каркас: Дерево',
      'Матеріал: Масив дерева, ДСП',
      'Розміри: 120x55x80 см',
      'Вага: 28 кг',
      'Колір: Світлий горіх'
    ]
  },
  {
    id: 22,
    name: 'Шафа 3-дв торонто',
    price: '$250',
    img: img4,
    additionalImages: [img2, img3],
    category: 'Шафи',
    categoryRu: 'Шкафы',
    description: 'This is a unique description for Toronto Product 2.',
    features: [
      'Каркас: Дерево',
      'Матеріал: Масив дерева, ДСП',
      'Розміри: 120x55x80 см',
      'Вага: 28 кг',
      'Колір: Світлий горіх'
    ]
  },
  {
    id: 23,
    name: 'Тумба ТВ торонто (відкрита)',
    price: '$250',
    img: img5,
    additionalImages: [img2, img3],
    category: 'ТВ тумби',
    categoryRu: 'ТВ тумбы',
    description: 'This is a unique description for Toronto Product 2.',
    features: [
      'Каркас: Дерево',
      'Матеріал: Масив дерева, ДСП',
      'Розміри: 120x55x80 см',
      'Вага: 28 кг',
      'Колір: Світлий горіх'
    ]
  },
  {
    id: 24,
    name: 'Тумба ТВ торонто (закрита)',
    price: '$250',
    img: img6,
    additionalImages: [img2, img3],
    category: 'ТВ тумби',
    categoryRu: 'ТВ тумбы',
    description: 'This is a unique description for Toronto Product 2.',
    features: [
      'Каркас: Дерево',
      'Матеріал: Масив дерева, ДСП',
      'Розміри: 120x55x80 см',
      'Вага: 28 кг',
      'Колір: Світлий горіх'
    ]
  },
  {
    id: 25,
    name: 'Столик туалетний торонто',
    price: '$250',
    img: img7,
    additionalImages: [img2, img3],
    category: 'Туалетні столики',
    categoryRu: 'Туалетные столики',
    description: 'This is a unique description for Toronto Product 2.',
    features: [
      'Каркас: Дерево',
      'Матеріал: Масив дерева, ДСП',
      'Розміри: 120x55x80 см',
      'Вага: 28 кг',
      'Колір: Світлий горіх'
    ]
  },
  {
    id: 26,
    name: 'Консоль торонто',
    price: '$250',
    img: img8,
    additionalImages: [img2, img3],
    category: 'Туалетні столики',
    categoryRu: 'Туалетные столики',
    description: 'This is a unique description for Toronto Product 2.',
    features: [
      'Каркас: Дерево',
      'Матеріал: Масив дерева, ДСП',
      'Розміри: 120x55x80 см',
      'Вага: 28 кг',
      'Колір: Світлий горіх'
    ]
  },
  {
    id: 27,
    name: 'Комод торонто 2-дв з 2 шухлядами',
    price: '$250',
    img: img9,
    additionalImages: [img2, img3],
    category: 'Комоди',
    categoryRu: 'Комоды',
    description: 'This is a unique description for Toronto Product 2.',
    features: [
      'Каркас: Дерево',
      'Матеріал: Масив дерева, ДСП',
      'Розміри: 120x55x80 см',
      'Вага: 28 кг',
      'Колір: Світлий горіх'
    ]
  },
  {
    id: 28,
    name: 'Комод високий торонто',
    price: '$250',
    img: img10,
    additionalImages: [img2, img3],
    category: 'Комоди',
    categoryRu: 'Комоды',
    description: 'This is a unique description for Toronto Product 2.',
    features: [
      'Каркас: Дерево',
      'Матеріал: Масив дерева, ДСП',
      'Розміри: 120x55x80 см',
      'Вага: 28 кг',
      'Колір: Світлий горіх'
    ]
  },
  {
    id: 29,
    name: 'Комод 4-дверний торонто',
    price: '$250',
    img: img11,
    additionalImages: [img2, img3],
    category: 'Комоди',
    categoryRu: 'Комоды',
    description: 'This is a unique description for Toronto Product 2.',
    features: [
      'Каркас: Дерево',
      'Матеріал: Масив дерева, ДСП',
      'Розміри: 120x55x80 см',
      'Вага: 28 кг',
      'Колір: Світлий горіх'
    ]
  },
];

export default torontoProducts;
