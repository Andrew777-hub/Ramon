import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import BasketModal from '../BasketModal/BasketModal';
import products from '../Products/Products';
import bristolProducts from '../Products/bristolProducts';
import torontoProducts from '../Products/torontoProducts';
import kelnProducts from '../Products/kelnProducts';
import kelnOnLegsProducts from '../Products/kelnOnLegsProducts';
import { BasketContext } from '../../context/BasketContext';
import { useTranslation } from 'react-i18next'; // імпорт useTranslation
import './ProductDetails.css';

const ProductDetails = () => {
  const { productId } = useParams();
  const { cart, addToCart } = useContext(BasketContext);
  const [isBasketModalOpen, setBasketModalOpen] = React.useState(false);
  const { t } = useTranslation(); // використання useTranslation

  const allProducts = [
    ...products,
    ...bristolProducts,
    ...torontoProducts,
    ...kelnProducts,
    ...kelnOnLegsProducts,
  ];

  const product = allProducts.find((p) => p.id === parseInt(productId));

  const handleAddToCart = () => {
    if (product) {
      addToCart(product);
    }
  };

  const closeBasketModal = () => {
    setBasketModalOpen(false);
  };

  if (!product) {
    return (
      <div>
        <Header onOpenBasket={() => setBasketModalOpen(true)} />
        <h1>{t('productNotFound')}</h1> {/* Перекладений текст */}
        <Footer />
      </div>
    );
  }

  const carouselImages = [
    product.img,
    ...product.additionalImages,
  ];

  return (
    <div>
      <Header onOpenBasket={() => setBasketModalOpen(true)} />
      <div className="product-details">
        <div className="product-main-info">
          <div className="carousel-block">
            <Carousel 
              showThumbs={true}
              infiniteLoop 
              useKeyboardArrows
              transitionTime={200}
            >
              {carouselImages.map((image, index) => (
                <div key={index}>
                  <img className="main-image" src={image} alt={product.name} />
                </div>
              ))}
            </Carousel>
          </div>
          <div className="product-info">
            <h1 className="product-title">{product.name}</h1>
            <div className="product-options">
              <p className="product-price">{product.price}</p>
              <button 
                className="order-button" 
                onClick={handleAddToCart}
              >
                {t('addToCart')} {}
              </button>
            </div>
            <div className="product-features">
              <h2>{t('features')}</h2> {}
              {product.features.map((feature, index) => (
                <p key={index}>{feature}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <BasketModal
        isOpen={isBasketModalOpen}
        onClose={closeBasketModal}
        cartItems={cart.reduce((acc, item) => {
          acc[item.name] = (acc[item.name] || 0) + item.quantity;
          return acc;
        }, {})}
      />
    </div>
  );
};

export default ProductDetails;
