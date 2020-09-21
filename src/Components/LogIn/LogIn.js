import React from 'react';
import Header from '../Header/Header';
import './LogIn.css'
import background from '../../Image/Rectangle 1.png'

const LogIn = () => {
    return (
        <div>
            <img className="LogInBackground" src={background} alt=""/>
            <Header></Header>
        </div>
    );
};

export default LogIn;