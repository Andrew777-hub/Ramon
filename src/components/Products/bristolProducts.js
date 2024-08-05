import img1 from './imgB/tumba1.jpg';
import img2 from './imgB/tumba2.jpg';
import img3 from './imgB/tumba3.jpg';
import img4 from './imgB/tumba4.jpg';
import img5 from './imgB/tumba5.jpg';
import img6 from './imgB/tumba6.jpg';
import img7 from './imgB/tumba7.jpg';
import img8 from './imgB/tumba8.jpg';
import img9 from './imgB/tumba9.jpg';
import img10 from './imgB/tumba10.jpg';
import './Products.css';

const bristolProducts = [
  {
    id: 9,
    name: 'Приліжкова тумба брістоль',
    price: '$220',
    img: img1,
    additionalImages: [img2, img3],
    category: 'Приліжкові тумби',
    categoryRu: 'Прикроватные тумбы',
    description: 'This is a unique description for Bristol Product 1.',
    features: [
      'Каркас: Дерево',
      'Матеріал: Масив дерева, ДСП',
      'Розміри: 120x50x80 см',
      'Вага: 25 кг',
      'Колір: Темний вільха'
    ]
  },  
  {
    id: 10,
    name: 'Комод 3 дверний брістоль',
    price: '$200',
    img: img2,
    additionalImages: [img2, img3],
    category: 'Комоди',
    categoryRu: 'Комоды',
    description: 'This is a unique description for Bristol Product 2.',
    features: [
      'Каркас: Дерево',
      'Матеріал: Масив дерева, ДСП',
      'Розміри: 100x40x75 см',
      'Вага: 20 кг',
      'Колір: Вільха світла'
    ]
  },
  {
    id: 11,
    name: 'Столик туалетний брістоль',
    price: '$210',
    img: img3,
    additionalImages: [img2, img3],
    category: 'Туалетні столики',
    categoryRu: 'Туалетные столики',
    description: 'This is a unique description for Bristol Product 3.',
    features: [
      'Каркас: Дерево',
      'Матеріал: Масив дерева, ДСП',
      'Розміри: 110x45x78 см',
      'Вага: 22 кг',
      'Колір: Темний дуб'
    ]
  },
  {
    id: 12,
    name: 'Столик журнальний брістоль',
    price: '$230',
    img: img4,
    additionalImages: [img2, img3],
    category: 'Журнальні столики',
    categoryRu: 'Журнальные столики',
    description: 'This is a unique description for Bristol Product 4.',
    features: [
      'Каркас: Дерево',
      'Матеріал: Масив дерева, ДСП',
      'Розміри: 115x50x82 см',
      'Вага: 24 кг',
      'Колір: Вільха'
    ]
  },
  {
    id: 13,
    name: 'Тумба ТВ брістоль',
    price: '$230',
    img: img5,
    additionalImages: [img2, img3],
    category: 'ТВ тумби',
    categoryRu: 'ТВ тумбы',
    description: 'This is a unique description for Bristol Product 4.',
    features: [
      'Каркас: Дерево',
      'Матеріал: Масив дерева, ДСП',
      'Розміри: 115x50x82 см',
      'Вага: 24 кг',
      'Колір: Вільха'
    ]
  },
  {
    id: 14,
    name: 'Комод 4-дв брістоль',
    price: '$230',
    img: img6,
    additionalImages: [img2, img3],
    category: 'Комоди',
    categoryRu: 'Комоды',
    description: 'This is a unique description for Bristol Product 4.',
    features: [
      'Каркас: Дерево',
      'Матеріал: Масив дерева, ДСП',
      'Розміри: 115x50x82 см',
      'Вага: 24 кг',
      'Колір: Вільха'
    ]
  },
  {
    id: 15,
    name: 'Шафа 2-дв брістоль',
    price: '$230',
    img: img7,
    additionalImages: [img2, img3],
    category: 'Шафи',
    categoryRu: 'Шкафы',
    description: 'This is a unique description for Bristol Product 4.',
    features: [
      'Каркас: Дерево',
      'Матеріал: Масив дерева, ДСП',
      'Розміри: 115x50x82 см',
      'Вага: 24 кг',
      'Колір: Вільха'
    ]
    
  },
  {
    id: 16,
    name: 'Шафа 3-дв брістоль',
    price: '$230',
    img: img8,
    additionalImages: [img2, img3],
    category: 'Шафи',
    categoryRu: 'Шкафы',
    description: 'This is a unique description for Bristol Product 4.',
    features: [
      'Каркас: Дерево',
      'Матеріал: Масив дерева, ДСП',
      'Розміри: 115x50x82 см',
      'Вага: 24 кг',
      'Колір: Вільха'
    ]
    
  },
  {
    id: 17,
    name: 'Комод 2-дв з 3 шухлядами брістоль',
    price: '$230',
    img: img9,
    additionalImages: [img2, img3],
    category: 'Комоди',
    categoryRu: 'Комоды',
    description: 'This is a unique description for Bristol Product 4.',
    features: [
      'Каркас: Дерево',
      'Матеріал: Масив дерева, ДСП',
      'Розміри: 115x50x82 см',
      'Вага: 24 кг',
      'Колір: Вільха'
    ]
    
  },
  {
    id: 18,
    name: 'Комод 2-дв з 2 шухлядами брістоль',
    price: '$230',
    img: img10,
    additionalImages: [img2, img3],
    category: 'Комоди',
    categoryRu: 'Комоды',
    description: 'This is a unique description for Bristol Product 4.',
    features: [
      'Каркас: Дерево',
      'Матеріал: Масив дерева, ДСП',
      'Розміри: 115x50x82 см',
      'Вага: 24 кг',
      'Колір: Вільха'
    ]

    
    
  },
  
];

export default bristolProducts;
