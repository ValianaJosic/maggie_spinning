import React from 'react';
import './home.css';

import Spin from '../../Assets/Videos/spin.mp4'
import Offer from '../Home/Offer/offer'
import Youtube from '../Home/Youtube/youtube'


function Home() {

  return (

      <div className='home'>
        <div className="home-intro">
        <div className="video hero">
          <video autoPlay="autoplay" loop="loop" muted >
            <source src={Spin} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        </div>
        <div className="home-info">
          <p className="home-title">COACH</p>
          <p>Caracas, Venezuela</p>
          <p>Premium weight loss and lifestyle transformations</p>
          <p> which create long lasting,</p>
          <p> dramatic results to your health, body & mind.
        </p>
        </div>
        </div>
      <Offer />
      <Youtube/>
      </div>
  );
}

export default Home;