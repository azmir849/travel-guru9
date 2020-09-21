import React from 'react';
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



function App() {
  return (
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
                    <Route path="/contact">
                      <Contact></Contact>
                    </Route>
                       <Route path="*">
                         <NoMatch></NoMatch>
                       </Route>    
      </Switch>
    </Router>
  );
}

export default App;
