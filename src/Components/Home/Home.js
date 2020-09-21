import React from 'react';
import backgroundImg from '../../Image/Rectangle 1.png'
import Header from '../Header/Header';
import HomeContent from '../HomeContent/HomeContent';
import './Home.css'

const Home = () => {
    return (
        <div>
            <div>
                 <img className="BackgroundImg" src={backgroundImg} alt=""/>
            </div>
         <Header></Header>
         <HomeContent></HomeContent>   
        </div>
    );
};

export default Home;