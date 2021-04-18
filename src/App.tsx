import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './main/pages/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Nav from './main/components/Nav';
import Contact from './main/pages/Contact';
import Course from './main/components/Course';
import Footer from './main/components/Footer';

function App() {
  return (
    <div className="app">
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/course/:id">
            <Course />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
