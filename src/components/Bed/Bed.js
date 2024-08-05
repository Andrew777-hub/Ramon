import React from 'react';
import { Link } from 'react-router-dom';
import './Bed.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import products from '../Products/Products'; 

const Bed = () => {
  return (
    <div>
      <Header />
      <div>
        <div className="product-grid">
          {products.map(product => (
            <Link key={product.id} to={`/product/${product.id}`} className="product-link">
              <div className="product-block">
                <img src={product.img} alt={product.name} />
                <div className="product-name">{product.name}</div>
                <div className="product-price">{product.price}</div>
                <button>Детальніше</button>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Bed;
