import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import kelnOnLegsProducts from '../Products/kelnOnLegsProducts';

const KelnOnLegs = () => {
  return (
    <div>
      <Header />
      <div className="product-grid">
        {kelnOnLegsProducts.map(product => (
          <Link key={product.id} to={`/kelnonlegs/product/${product.id}`} className="product-link">
            <div className="product-block">
              <img src={product.img} alt={product.name} />
              <div className="product-name">{product.name}</div>
              <div className="product-price">{product.price}</div>
              <button>Детальніше</button>
            </div>
          </Link>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default KelnOnLegs;
