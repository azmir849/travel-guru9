import React from 'react';
import './SearchPageElement.css'
import hotelRoom from '../../Image/Rectangle 26.png'
import hotelBed from '../../Image/Rectangle 27.png'
import beach from '../../Image/Rectangle 28.png'
import startRateIcon from '../../Icon/star_1_.png'
import GoogleMap from '../GoogleMap/GoogleMap';

const SearchPageElement = () => {
    return (
        <div>
            <p className="PlaceTitle">252 stays Apr 13-173 guests</p>
            <h3 className="PlaceName">Stays in Cox's Bazar</h3>
            <div className="Room1">
                <div className="Room1Img">
                    <img src={hotelRoom} alt=""/>
                </div>
                <div className="Room1textArea">
                    <h5 className="Service-title">Light bright airy stylish apt and safe peaceful stay</h5>
                    <p className="Room-service">4guests 2bedrooms 2beds 2baths </p>
                    <p className="Kitchen-service">Wif Air conditioning Kitchen</p>
                    <p className="cancellation">Cancellation fexibility availaable</p>
                    <img className="StarRate" src={startRateIcon} alt=""/>
                    <p className="costAndRating">4.9(20)  $34/night $167 total</p>
                </div>
            </div> 
            <div className="Room2">
                <div className="Room2Img">
                    <img src={hotelBed} alt=""/>
                </div>
                <div className="Room2textArea">
                    <h5 className="Service-title">Apartment in Lost Pannorama</h5>
                    <p className="Room-service">4guests 2bedrooms 2beds 2baths </p>
                    <p className="Kitchen-service">Wif Air conditioning Kitchen</p>
                    <p className="cancellation">Cancellation fexibility availaable</p>
                    <img className="StarRate" src={startRateIcon} alt=""/>
                    <p className="costAndRating">4.8(10)  $52/night $167 total</p>
                </div>
            </div> 
            <div className="Room3">
                <div className="Room3Img">
                    <img src={beach} alt=""/>
                </div>
                <div className="Room3textArea">
                    <h5 className="Service-title">AR Lounge and Pool (r + b)</h5>
                    <p className="Room-service">4guests 2bedrooms 2beds 2baths </p>
                    <p className="Kitchen-service">Wif Air conditioning Kitchen</p>
                    <p className="cancellation">Cancellation fexibility availaable</p>
                    <img className="StarRate" src={startRateIcon} alt=""/>
                    <p className="costAndRating">4.9(25)  $44/night $167 total</p>
                </div>
            </div> 
            <GoogleMap></GoogleMap>
        </div>
    );
};

export default SearchPageElement;