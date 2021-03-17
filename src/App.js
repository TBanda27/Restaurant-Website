import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './Home';
import ContactUs from './ContactUs';
import AboutUs from './AboutUs';
import MenuBody from './MenuBody';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path ='/'>
            <Home/>
          </Route>
          <Route path ='/menu'>
            <MenuBody/>
          </Route>
          <Route path ='/about-us'>
            <AboutUs/>
          </Route>
          <Route path ='/contact-us'>
            <ContactUs/>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}
export default App