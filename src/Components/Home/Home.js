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
            <div className="bg-transparent">
               
                <nav className="navbar navbar-light bg-light navForm  bg-transparent">
                    <form className="form-inline">
                        <input className="form-control bg-transparent form-text  mr-sm-2" type="search" placeholder="Search your Destination" aria-label="Search"/>
                    </form>
                </nav>
            </div>
         <Header></Header>
         <HomeContent></HomeContent>   
        </div>
    );
};

export default Home;