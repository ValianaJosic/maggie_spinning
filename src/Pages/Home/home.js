import React from 'react';
import './home.css';

import Spin from '../../Assets/Images/spin.jpg'


function Home() {

  return (
    <div className="hero-back">
      <img alt="spin" src={Spin} className="hero"></img>
      <div className="home-info">
        <p>COACH</p>
        <p>Caracas,Venezuela</p>
        <p>Premium weight loss and lifestyle transformations</p>
        <p> which create long lasting,</p>
        <p> dramatic results to your health, body & mind.
        </p>

      </div>
    </div>

  );
}

export default Home;