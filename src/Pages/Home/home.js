import React from 'react';
import './home.css';

import Spin from '../../Assets/Images/spin.jpg'


function Home() {
    
  return (
    <div>
      <img alt= "spin" src={Spin} className="hero"></img>
    </div>
  );
}

export default Home;