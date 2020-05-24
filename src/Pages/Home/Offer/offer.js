import React from 'react';
import './offer.css';

import img from '../../../Assets/Images/spin.jpg'


const Offer = () => {
  return (

    <div className="offer">
      <div className="offer-info">
        <p className="home-title">
          Nutrition
        </p>
        <p className="offer-about">
          Learn about and implement nutritional strategies that will transform you.
        </p>
        <p className="home-title">
          Exercise
        </p>
        <p className="offer-about">
          Tailored, structured, time-efficient & progressive exercise programme.
        </p>
        <p className="home-title">
          Lifestyle
        </p>
        <p className="offer-about">  
          Learn about and implement vital lifestyle habits to start feeling amazing on the inside and looking great on the outside.
        </p>
        <p className="home-title">
          Mindset
        </p>
        <p className="offer-about">  
          By applying mindset principles to your burning desire of achieving your goals - you will become a better version of you.
        </p>
      </div>
      <div className="offer-div">
        <img alt=' ' src={img} className="offer-img"></img>
      </div>
    </div>
  );
}

export default Offer;