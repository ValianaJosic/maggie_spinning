import React from 'react';
import './offer.css';

import img from '../../../Assets/Images/spin.jpeg'


const Offer = () => {
  return (
    
    <div className="offer">
        <div className="offer-div">
            <img alt=' ' src={img} className="offer-img"></img>
        </div>
    </div>
  );
}

export default Offer;