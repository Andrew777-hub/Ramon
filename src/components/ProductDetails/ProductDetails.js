import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import products from '../Products/Products';
import bristolProducts from '../Products/bristolProducts';
import torontoProducts from '../Products/torontoProducts';
import kelnProducts from '../Products/kelnProducts';
import kelnOnLegsProducts from '../Products/kelnOnLegsProducts';
import OrderModal from '../OrderModal/OrderModal';
import './ProductDetails.css';

const ProductDetails = () => {
  const { productId } = useParams();

  const allProducts = [
    ...products,
    ...bristolProducts,
    ...torontoProducts,
    ...kelnProducts,
    ...kelnOnLegsProducts,
  ];

  const product = allProducts.find((p) => p.id === parseInt(productId));
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  const openOrderModal = () => {
    setIsOrderModalOpen(true);
  };

  const closeOrderModal = () => {
    setIsOrderModalOpen(false);
  };

  const handleOrderSubmit = ({ fullName, phoneNumber, productName }) => {
    const orderData = {
      fullName,
      phoneNumber,
      product: productName,
    };

    console.log('Sending order data:', orderData);
  };

  useEffect(() => {
    const carouselElement = document.querySelector('.carousel-block');
    
    const preventVerticalScroll = (e) => {
      if (e.deltaY !== 0) {
        e.preventDefault();
      }
    };

    if (carouselElement) {
      carouselElement.addEventListener('wheel', preventVerticalScroll);

      return () => {
        carouselElement.removeEventListener('wheel', preventVerticalScroll);
      };
    }
  }, []);

  if (!product) {
    return (
      <div>
        <Header />
        <h1>Продукт не знайдено</h1>
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
      <Header />
      <div className="product-details">
        <div className="product-main-info">
          <div className="carousel-block">
          <Carousel 
                showThumbs={true}
                infiniteLoop 
                useKeyboardArrows
                transitionTime={200} 
                //interval={3000}      
                //autoPlay              
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
              <button className="order-button" onClick={openOrderModal}>
                Замовити
              </button>
              {isOrderModalOpen && (
                <OrderModal
                  closeModal={closeOrderModal}
                  handleSubmit={handleOrderSubmit}
                  productName={product.name}
                />
              )}
            </div>
            <div className="product-features">
              <h2>Характеристики</h2>
              {product.features.map((feature, index) => (
                <p key={index}>{feature}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetails;
