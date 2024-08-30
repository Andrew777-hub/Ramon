import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './DiscountBanner.css';

const DiscountBanner = () => {
  const { t } = useTranslation();
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowBanner(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`discount-banner ${showBanner ? 'show' : ''}`}>
      <div className="content">
        <p dangerouslySetInnerHTML={{ __html: t('discountMessage') }} />
      </div>
    </div>
  );
};

export default DiscountBanner;
