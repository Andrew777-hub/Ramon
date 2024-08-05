import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const FilteredProducts = () => {
  const location = useLocation();
  const { filteredProducts } = location.state || {};
  

  return (
    <div>
      <Header />
      <div className="product-grid">
        {filteredProducts && filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <Link key={product.id} to={`/product/${product.id}`} className="product-link">
              <div className="product-block">
                <img src={product.img} alt={product.name} />
                <div className="product-name">{product.name}</div>
                <div className="product-price">{product.price}</div>
                <button>Детальніше</button>
              </div>
            </Link>
          ))
        ) : (
          <p>Немає результатів для відображення.</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default FilteredProducts;
