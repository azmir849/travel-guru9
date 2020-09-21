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
            <Route path="*">
              <NoMatch></NoMatch>
            </Route>    
      </Switch>
    </Router>
  );
}

export default App;
