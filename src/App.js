import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import NoMatch from './Components/NoMatch/NoMatch';
import News from './Components/News/News';
import Destination from './Components/Destination/Destination';
import Blog from './Components/Blog/Blog';
import Contact from './Components/Contact/Contact';
import LogIn from './Components/LogIn/LogIn';
import SearchPage from './Components/SearchPage/SearchPage';
import Booking from './Components/Booking/Booking';
import Sreemangal from './Components/Sreemangal/Sreemangal';
import Sundarban from './Components/Sundarban/Sundarban';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();
function App() {
  const [loggedInUser,setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value = {[loggedInUser,setLoggedInUser]}>
      <Router>
      <Switch>
        <Route  exact path="/">
          <Home/>
        </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
            <Route path="/news">
              <News></News>
            </Route>
               <Route path="/destinations">
                  <Destination></Destination>
               </Route>
                  <Route path="/blog">
                    <Blog></Blog>
                  </Route>
                    <PrivateRoute path="/search">
                     <SearchPage></SearchPage>
                      </PrivateRoute>
                    <Route path="/contact">
                      <Contact></Contact>
                    </Route>
                      <Route path="/booking">
                        <Booking></Booking>
                     </Route>
                      <Route path="/sreemangal">
                         <Sreemangal></Sreemangal>
                      </Route>
                      <Route path="/sundarban">
                         <Sundarban></Sundarban>
                      </Route>
                      <Route path="/login">
                        <LogIn></LogIn>
                      </Route>
                        <Route path="*">
                          <NoMatch></NoMatch>
                        </Route>    
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
