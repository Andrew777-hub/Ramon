import img1 from './imgKL/tumba1.jpg';
import img2 from './imgKL/tumba2.jpg';
import './Products.css';

const kelnOnLegsProducts = [
  {
    id: 39,
    name: 'Тумба приліжкова кельн (високі ніжки)',
    price: '$280',
    img: img1,
    additionalImages: [img1, img2],
    category: 'Приліжкові тумби',
    categoryRu: 'Прикроватные тумбы',
    description: 'This is a unique description for Keln On Legs Product 1.',
    features: [
      'Каркас: Дерево',
      'Матеріал: Масив дерева, ДСП',
      'Розміри: 150x70x95 см',
      'Вага: 40 кг',
      'Колір: Вільха'
    ]
  },
  {
    id: 40,
    name: 'Комод кельн (високі ніжки)',
    price: '$290',
    img: img2,
    additionalImages: [img1, img2],
    category: 'Комоди',
    categoryRu: 'Комоды',
    description: 'This is a unique description for Keln On Legs Product 2.',
    features: [
      'Каркас: Дерево',
      'Матеріал: Масив дерева, ДСП',
      'Розміри: 140x65x90 см',
      'Вага: 38 кг',
      'Колір: Темний горіх'
    ]
  },
];

export default kelnOnLegsProducts;
