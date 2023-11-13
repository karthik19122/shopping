import React from 'react';
import './Breadcrum.css';
import arrow_icon from '../Assets/breadcrum_arrow.png';

const Breadcrum = (props) => {
  const { product } = props;

  if (!product || !product.category || !product.name) {
    return null; // Return null or handle the loading state
  }

  return (
    <div className='breadcrum'>
      HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" /> {product.category}<img src={arrow_icon} alt="" />{product.name}
     
    </div>
  );
};

export default Breadcrum;
