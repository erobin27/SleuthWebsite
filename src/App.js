import React from 'react';
import './App.css';
import Home from './components/pages/HomePage/Home';
import Services from './components/pages/Services/Services';
import Products from './components/pages/Products/Products';
import ChartPage from './components/pages/Chart/ChartPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/pages/Footer.js/Footer';
import {Cards, Chart, CountryPicker } from './components/covidChart';
import styles from './components/covidChart/ChartPage.module.css';
import {fetchData } from './components/covidChart/api';
import Contact from './components/pages/Contact/Services';

function App() {

      return(
          <Router>
            <Navbar />
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/services' component={Services} />
              <Route path='/products' component={Products} />
              <Route path='/Chart' component={ChartPage} />
              <Route path='/contact' component={Contact} />
            </Switch>
            <Footer />
          </Router>
        );
      
  
}



export default App;
