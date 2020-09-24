import React from 'react';
import { Link } from 'react-router-dom';
import Sajek from '../../Image/Sajek.png'
import Sreemongal from '../../Image/Sreemongol.png'
import Sundarban from '../../Image/sundorbon.png'
import './HomeContent.css'

const HomeContent = () => {
   function HandleSajeckClick(){
        console.log('sajeck clicked')
    }
    return (
           <div>
                <div className="card-deck Card">
                <div className="card" >
                    <img src={Sajek} onClick={HandleSajeckClick} className="card-img-top" alt=""/>
                    <h4>SAJEK</h4>
                </div>
                <div className="card">
                    <img src={Sreemongal} className="card-img-top" alt=""/>
                    <h4>SREEMONGAL</h4>
                </div>
                <div className="card">
                    <img src={Sundarban} className="card-img-top" alt=""/>
                    <h4>SUNDARBAN</h4>
                </div>
            </div>
             <div className="cardInformation">
             <h1>SAJEK</h1>
             <p>Sajek was unexplored for a long time and recently it emerged as a tourist spot for it’s outstanding natural beauty.</p>
             <button className="btn-warning Booking-btn">Booking Now</button>
         </div>
      </div>
    );
};

export default HomeContent;