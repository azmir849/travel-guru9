import React from 'react';
import BookingCard from '../BookingCard/BookingCard';
import backgroundImg from '../../Image/Rectangle 1.png'
import Header from '../Header/Header';
import { Link } from 'react-router-dom';

const Sundarban = () => {
    return (
        <div>
             <div>
             <Link to='/'> <img className="BackgroundImg" src={backgroundImg} alt=""/></Link> 
            </div>
            <div className="bg-transparent">
                <nav className="navbar navbar-light bg-light navForm  bg-transparent">
                    <form className="form-inline">
                        <input className="form-control bg-transparent-80 form-text  mr-sm-2" type="search" placeholder="Search your Destination" aria-label="Search"/>
                    </form>
                </nav>
            </div>
         <Header></Header>
         <div className="cardInformation">
             <h1>Sundarban</h1>
             <p>The Sundarbans is a mangrove area in the delta formed by the confluence of the Ganges, Brahmaputra and Meghna Rivers in the Bay of Bengal.It spans from the Hooghly River in India's state of West Bengal to the Baleswar River in Bangladesh.</p>
         </div>
         <BookingCard></BookingCard>
          
        </div>
    );
};

export default Sundarban;