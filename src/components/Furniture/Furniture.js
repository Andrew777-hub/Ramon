import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Furniture.css';
import FilterIcon from '../../img/filter.png';
import SearchIcon from '../../img/search.png';
import BristolImage from './img/bristol.jpg';
import TorontoImage from './img/toronto.jpg';
import KelnImage from './img/keln.jpg';
import KelnOnLegsImage from './img/kelnOnLegs.jpg';
import OrleanImage from './img/orlean.jpg';
import allProducts from '../Products/allProducts';

const Furniture = () => {
  const { t } = useTranslation();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const navigate = useNavigate();

  const furnitureOptions = [
    t('wardrobes'),
    t('nightstands'),
    t('dressers'),
    t('tvUnits'),
    t('vanityTables'),
    t('coffeeTables')
  ];

  const seriesOptions = [
    { name: t('bristol'), path: '/furniture/bristol', image: BristolImage },
    { name: t('toronto'), path: '/furniture/toronto', image: TorontoImage },
    { name: t('keln'), path: '/furniture/keln', image: KelnImage },
    { name: t('kelnOnLegs'), path: '/furniture/kelnOnLegs', image: KelnOnLegsImage },
    { name: t('orlean'), path: '/furniture/orlean', image: OrleanImage }
  ];
  

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const handleSelectItem = (item) => {
    setSelectedItems((prevSelectedItems) =>
      prevSelectedItems.includes(item)
        ? prevSelectedItems.filter((i) => i !== item)
        : [...prevSelectedItems, item]
    );
  };

  const handleSelectAll = () => {
    if (selectedItems.length === furnitureOptions.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(furnitureOptions);
    }
  };

  const handleSearch = () => {
    const filteredProducts = allProducts.filter(product =>
      selectedItems.includes(product.category) || 
      (product.categoryRu && selectedItems.includes(product.categoryRu))
    );
    navigate('/filtered-products', { state: { filteredProducts } });
  };
  

  return (
    <>
      <Header />
      <div className="furniture">
        <div className="filter-container">
          <button onClick={toggleFilter} className="filter-button">
            {t('filter')} <img src={FilterIcon} alt="Filter Icon" className="FilterIcon" />
          </button>
          <div className={`filter-dropdown ${isFilterOpen ? 'open' : ''}`}>
            <div className="checkbox-wrapper" onClick={handleSelectAll}>
              <input
                type="checkbox"
                checked={selectedItems.length === furnitureOptions.length}
                readOnly
              />
              <label>{t('selectAll')}</label>
            </div>
            {furnitureOptions.map((option) => (
              <div className="checkbox-wrapper" key={option} onClick={() => handleSelectItem(option)}>
                <input
                  type="checkbox"
                  checked={selectedItems.includes(option)}
                  readOnly
                />
                <label>{option}</label>
              </div>
            ))}
            {selectedItems.length > 0 && (
              <button className="search-button" onClick={handleSearch}>
                {t('search')} <img src={SearchIcon} alt="Search Icon" className="SearchIcon" />
              </button>
            )}
          </div>
        </div>
        <h2 className="series-title">{t('furnitureCollections')}</h2>
        <div className="series-container">
          {seriesOptions.map(option => (
            <Link to={option.path} key={option.name} className="series-block">
              <img src={option.image} alt={option.name} />
              <p>{option.name}</p>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Furniture;
