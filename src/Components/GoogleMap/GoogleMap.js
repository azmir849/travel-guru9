import React from 'react';
import MapPhoto from '../../Image/map.png'
import './GoogleMap.css'

const GoogleMap = () => {
    return (
        <div>
            <img className="MapPhoto" src={MapPhoto} alt=""/>
        </div>
    );
};

export default GoogleMap;