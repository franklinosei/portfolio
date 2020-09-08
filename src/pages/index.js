import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Projects from './Projects';
import Contact from './Contact';
import Resume from './Resume';
import ScrollToTop from '../components/ScrollToTop';


const Pages = ({ user }) => {
  return (
    <Router basename={window.location.pathname || ' '}>
      <ScrollToTop />
   
      <Switch>
        
        <Route exact path="/">
          <Home user={user} />
        </Route>

        <Route path="/about">
          <About user={user} />
        </Route>

        <Route path="/projects">
          <Projects user={user} />
        </Route>

        <Route path="/resume">
          <Resume user={user} />
        </Route>

        <Route path="/contact">
          <Contact user={user} />
        </Route>
      </Switch>
  
    </Router>
  );
};

export default Pages;
