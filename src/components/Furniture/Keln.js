import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import kelnProducts from '../Products/kelnProducts';


const Keln = () => {
  const { t } = useTranslation();
  
  return (
    <div>
      <Header />
      <div className="product-grid">
        {kelnProducts.map(product => (
          <Link key={product.id} to={`/keln/product/${product.id}`} className="product-link">
            <div className="product-block">
              <img src={product.img} alt={product.name} />
              <div className="product-name">{product.name}</div>
              <div className="product-price">{product.price}</div>
              <button>{t('details')}</button>
            </div>
          </Link>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Keln;

