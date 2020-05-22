import React from 'react';
import './home.css';

import Spin from '../../Assets/Videos/spin.mp4'


function Home() {

  return (
    <div>
        <video autoPlay="autoplay" loop="loop" muted className="video hero">
          <source src={Spin} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      <div className="home-info">
        <p className="home-title">COACH</p>
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