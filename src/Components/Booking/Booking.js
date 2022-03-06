import React from 'react';
import Header from '../Header/Header';
import backgroundImg from '../../Image/Rectangle 1.png'
import BookingCard from '../BookingCard/BookingCard';
import { Link } from 'react-router-dom';

const Booking = () => {
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
             <h1>SAJEK</h1>
             <p>Sajek was unexplored for a long time and recently it emerged as a tourist spot for it’s outstanding natural beauty.
             You will notice lofty mountains, dense forest, sprawling grasslands and miles and miles of hilly tracks. On the way, you will come cross Mayni range, River Mayni and River Kasalong where you will feel that the green and blue harmonize together creating a perfect melody. 
             </p>
         </div>
         <BookingCard></BookingCard>
        </div>
    );
};

export default Booking;