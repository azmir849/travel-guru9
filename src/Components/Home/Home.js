import React from 'react';
import backgroundImg from '../../Image/Rectangle 1.png'
import travelGuruLogo from '../../Icon/Logo.png'
import './Home.css'

const Home = () => {
    return (
        <div>
           <img className="BackgroundImg" src={backgroundImg} alt=""/>
           <img className="TravelGuruLogo" src={travelGuruLogo} alt=""/>
        </div>
    );
};

export default Home;