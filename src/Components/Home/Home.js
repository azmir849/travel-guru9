import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImg from '../../Image/Rectangle 1.png'

import Header from '../Header/Header';
import HomeContent from '../HomeContent/HomeContent';
import './Home.css'

const Home = () => {
    return (
        <div>
            <div>
              <Link to='/'> <img className="BackgroundImg" src={backgroundImg} alt=""/></Link> 
            </div>
            <div className="bg-transparent">
                <nav className="navbar navbar-light bg-light navForm  bg-transparent">
                    <form className="form-inline">
                        <input className="form-control bg-transparent-90 form-text  mr-sm-2" type="search" placeholder="Search your Destination" aria-label="Search"/>
                    </form>
                </nav>
            </div>
         <Header></Header>
         <HomeContent></HomeContent>   
        </div>
    );
};

export default Home;