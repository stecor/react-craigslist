import React, { Component} from 'react';
//import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './includes/Header';
import Home from './pages/Home';
//import Listings from './pages/Listings';
import Category from './pages/Category';
import Details from './pages/Details';
import './App.css';



export default class App extends Component {
  constructor () {
    super()
    this.state = {

    }
  }

  render () {
    return (
      <Router>
        <div >
          <Route  path="/:city" component={Header}/>
          <Route exact path="/" component={Home}/>
          <Route exact path="/:city" component={Home}/>
          <Route exact path="/:city/:category" component={Category}/>
          <Route exact path="/:city/:category/:listings" component={Category}/>
          <Route exact path="/:city/:category/:listings/:details" component={Details}/>
        </div>
      </Router>
    )
  }
}
