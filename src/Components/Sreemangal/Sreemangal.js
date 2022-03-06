import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImg from '../../Image/Rectangle 1.png'
import BookingCard from '../BookingCard/BookingCard';
import Header from '../Header/Header';

const Sreemangal = () => {
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
             <h1>Sreemangal</h1>
             <p>Sreemangal, about 150 km north east of Dhaka and 75 km south of Sylhet, can be claimed to be the energy and refreshment source of Bangladesh for producing the highest quantity of tea around the country.</p>
         </div>
         <BookingCard></BookingCard>
          
        </div>
    );
};

export default Sreemangal;