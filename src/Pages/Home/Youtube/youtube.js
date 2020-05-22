import React from 'react';
import './youtube.css';

const Youtube = () => {
    return (

        <div className="iframe-mock-home home-youtube">
            <iframe title='maggie' width="560" height="315" src="https://www.youtube.com/embed/yMfmaQAXQns?controls=0?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    );
}

export default Youtube;