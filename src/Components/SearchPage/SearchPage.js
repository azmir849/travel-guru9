import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import  './SearchPage.css'
import travelGuruLogo from '../../Icon/LogoBlack.png'

const SearchPage = () => {
    const [loggedInUser,setLoggedInUser] = useContext(UserContext);
    return (
        <div>
             <div>
                <img className="searchNavBarLogo" src={travelGuruLogo} alt=""/>
              <nav className="NavListArea">
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
                </ul>
              </nav>
              <h4 className="UserName">{loggedInUser.name}</h4>
            </div>
            <div className="Divider"></div>
        </div>
    );
};

export default SearchPage;