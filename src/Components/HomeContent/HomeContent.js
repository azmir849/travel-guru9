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
             <h1>SAJEK</h1>
             <p>Sajek was unexplored for a long time and recently it emerged as a tourist spot for it’s outstanding natural beauty.</p>
             <button  onClick={handleSajek} className="btn-warning Booking-btn">Booking Now</button>
         </div>
      </div>
    );
};

export default HomeContent;