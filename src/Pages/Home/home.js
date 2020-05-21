import React from 'react';
import './home.css';

import Spin from '../../Assets/Images/spin.jpg'


function Home() {

  return (
    <div>
      <img alt="spin" src={Spin} className="hero"></img>
      <div>
        <p>COACH</p>
        <p>Caracas,Venezuela</p>
        <p>Premium weight loss and lifestyle transformations which create long lasting, dramatic results to your health, body & mind.
        </p>

      </div>
    </div>

  );
}

export default Home;