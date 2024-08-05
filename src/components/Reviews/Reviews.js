import React from 'react';
import { useTranslation } from 'react-i18next';
import './Reviews.css';
import googleLogo from './img/GoogleLogo.png';
import user1Img from './img/User1.png';
import user2Img from './img/User2.png';
import user3Img from './img/User3.png';
import user4Img from './img/User4.png';

function formatDateAgo(timestamp, t) {
  const now = new Date();
  const reviewDate = new Date(timestamp);
  const diffTime = Math.abs(now - reviewDate);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 1) {
    return t('yesterday');
  } else {
    return t('daysAgo', { count: diffDays });
  }
}

export default function Reviews() {
  const { t } = useTranslation();

  const googleReviewsLink = 'https://www.google.com/search?q=ramon+meble+%D1%82%D0%B5%D1%80%D0%BD%D0%BE%D0%BF%D1%96%D0%BB%D1%8C+reviews&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQIxgn0gEJNDI2OWowajE1qAIIsAIB&sourceid=chrome&ie=UTF-8&si=ACC90nwjPmqJHrCEt6ewASzksVFQDX8zco_7MgBaIawvaF4-7iqzBcv9DjzJKTzjO9tM-63Y0EUTmaLyrak_MVYrSHasJBxoXA2InJpmdayBdM-lncnRA90lc8LIq_wsvN9pwb0ZXhb92uonQXSd8_kH0sgaxjlTyg%3D%3D&ictx=1&ved=2ahUKEwih__WQ8aiHAxUaBtsEHVImBMUQyNoBKAJ6BAgbEAQ#lrd=0x4730377041637f2f:0x3abc2cac242317d4,1';

  return (
    <div className="reviews">
      <div className="reviews-header">
        <img src={googleLogo} alt="Google" className="google-logo" /> {}
        <div className="rating-info">
          <h2>{t('rating')}</h2>
          <div className="rating">
            <span className="rating-value">5.0</span>
            <span className="stars">★★★★★</span>
            <span className="reviews-count">{t('reviews')}</span>
          </div>
        </div>
        <a href={googleReviewsLink} target="_blank" rel="noopener noreferrer" className="write-review-btn">{t('moreReviews')}</a>
      </div>
      <div className="reviews-list">
        <div className="review-card">
          <div className="user-info">
            <img src={user1Img} alt="User" className="user-img" /> {}
            <div className="user-details">
              <span className="user-name">Анна Чорная</span>
              <span className="review-time">{formatDateAgo('2024-07-12T10:20:30Z', t)}</span>
            </div>
          </div>
          <div className="review-content">
            <span className="stars">★★★★★</span>
            <p>Дякую за такі чудові меблі. Замовляла повний набір для спальні: шафу, комод та 2 приліжкові тумби. Консультанти дуже приємні, допомогли підібрати по кольору який найкраще підходив під інтерʼєр. Доставили все вчасно, якість дуже хороша (навіть майсти які збирали були вражені якістю фурнітури).
              Також порадувало упакування, було таке
              враження, що везли не меблі, а склянні
              вироби.</p>
            <a href={googleReviewsLink} target="_blank" rel="noopener noreferrer" className="read-more">{t('readMore')}</a>
          </div>
        </div>
        <div className="review-card">
          <div className="user-info">
            <img src={user2Img} alt="User" className="user-img" /> {}
            <div className="user-details">
              <span className="user-name">Олена Земляк</span>
              <span className="review-time">{formatDateAgo('2024-07-12T10:20:30Z', t)}</span>
            </div>
          </div>
          <div className="review-content">
            <span className="stars">★★★★★</span>
            <p>Доброго вечора, замовляли у Вас приліжкові тумбочки, тумбочками задоволені, якість на висоті.Дуже вдячна за доставку до квартири, буду замовляти ще та рекомендувати Вас своїм
            друзям.</p>
            <a href={googleReviewsLink} target="_blank" rel="noopener noreferrer" className="read-more">{t('readMore')}</a>
          </div>
        </div>
        <div className="review-card">
          <div className="user-info">
            <img src={user3Img} alt="User" className="user-img" /> {}
            <div className="user-details">
              <span className="user-name">Алина Харченко</span>
              <span className="review-time">{formatDateAgo('2024-07-15T10:20:30Z', t)}</span>
            </div>
          </div>
          <div className="review-content">
            <span className="stars">★★★★★</span>
            <p>Чудовий магазин ,великий вибір , дуже привітні менеджери ,які зможуть вам все підібрати і порекомендувати найкращі меблі
            Дякую!</p>
            <a href={googleReviewsLink} target="_blank" rel="noopener noreferrer" className="read-more">{t('readMore')}</a>
          </div>
        </div>
        <div className="review-card">
          <div className="user-info">
            <img src={user4Img} alt="User" className="user-img" /> {}
            <div className="user-details">
              <span className="user-name">Дарья Курносенко</span>
              <span className="review-time">{formatDateAgo('2024-07-12T10:20:30Z', t)}</span>
            </div>
          </div>
          <div className="review-content">
            <span className="stars">★★★★★</span>
            <p>Реально європейська якість українського виробництва за демократичними цінами, що дуже тішить. Обслуговування, термін виготовлення та доставка товару - все на рівні рекомендую</p>
            <a href={googleReviewsLink} target="_blank" rel="noopener noreferrer" className="read-more">{t('readMore')}</a>
          </div>
        </div>
      </div>
    </div>
  );
}
