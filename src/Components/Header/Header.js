import React from 'react';
import './Header.css'
import travelGuruLogo from '../../Icon/Logo.png'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="bg-transparent">
                <img className="TravelGuruLogo" src={travelGuruLogo} alt=""/>
                <nav className="navbar navbar-light bg-light navForm  bg-transparent">
                    <form className="form-inline">
                        <input className="form-control bg-transparent form-text  mr-sm-2" type="search" placeholder="Search your Destination" aria-label="Search"/>
                    </form>
                </nav>
            </div>
            <div>
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