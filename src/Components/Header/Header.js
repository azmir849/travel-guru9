import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
import travelGuruLogo from '../../Icon/LogoBlack.png'

const Header = () => {
    return (
        <div>
            <div>
            <img className="TravelGuruLogo" src={travelGuruLogo} alt=""/>
              <nav className="nav navMenuArea">
                <ul>
                    <li>
                        <Link to="/news">News</Link>
                    </li>
                    <li>
                        <Link to="/destinations">Destination</Link>
                    </li>
                    <li>
                        <Link to="/blog">Blog</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link className="LogIn-btn btn-warning" to="/login">LogIn</Link>
                    </li>
                </ul>
              </nav>
            </div>
        </div>
    );
};

export default Header;
