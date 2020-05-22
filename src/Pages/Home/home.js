import React, { Fragment } from 'react';
import './home.css';

import Spin from '../../Assets/Videos/spin.mp4'
import Offer from '../Home/Offer/offer'


function Home() {

  return (
    <Fragment>
    <div className='home'>
        <video autoPlay="autoplay" loop="loop" muted className="video hero">
          <source src={Spin} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      <div className="home-info">
        <p className="home-title">COACH</p>
        <p>Caracas, Venezuela</p>
        <p>Premium weight loss and lifestyle transformations</p>
        <p> which create long lasting,</p>
        <p> dramatic results to your health, body & mind.
        </p>
      </div>
    </div>
    <div>
    <Offer/>
    </div>
    </Fragment>
  );
}

export default Home;