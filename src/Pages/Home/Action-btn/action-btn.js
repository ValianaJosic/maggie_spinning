import React from 'react';
import '../Action-btn/action-btn.css';
import { NavLink } from 'react-router-dom';


function Actionbtn() {

    return (
        <div className="action-btn">
             <NavLink to="/contact" className="home-btn"><span>Get Started</span></NavLink>
        </div>
    )
};

export default Actionbtn;
