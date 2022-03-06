import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Sajek from '../../Image/Sajek.png'
import Sreemongal from '../../Image/Sreemongol.png'
import Sundarban from '../../Image/sundorbon.png'
import './HomeContent.css'

const HomeContent = () => {
    const history = useHistory();
    const handleSajek = () =>{
        history.push("/booking");
   }
    const handleSreemangal =() =>{
        history.push("/sreemangal");
    }
    const handleSundarban =() =>{
        history.push("/sundarban");
    }

    return (
           <div>
                <div className="card-deck Card">
                <div className="card" onClick={handleSajek} >
                    <img src={Sajek} className="card-img-top" alt=""/>
                    <h4>SAJEK</h4>
                </div>
                <div className="card" onClick={handleSreemangal}>
                    <img src={Sreemongal} className="card-img-top" alt=""/>
                    <h4>SREEMONGAL</h4>
                </div>
                <div className="card" onClick={handleSundarban}>
                    <img src={Sundarban} className="card-img-top" alt=""/>
                    <h4>SUNDARBAN</h4>
                </div>
            </div>
             <div className="cardInformation">
             <h5>Travelling removes our monotony and gives pleasure. Similarly, it also broadens our outlook and refreshes our mind. 
             A good traveler can easily educate others. He can give us first-hand knowledge of men and matters of other country.</h5>
             <button  onClick={handleSajek} className="btn-warning Booking-btn">Travel Now</button>
         </div>
      </div>
    );
};

export default HomeContent;