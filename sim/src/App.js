import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './App.css';
import Navbar from './Components/Navigation/Navbar';
import Jumbotron from './Components/UI/Jumbotron/Jumbotron';
import Admin from './containers/Admin/Admin';
import Production from './containers/Production/Production';
import Inventory from './containers/Receiving/Inventory';
import Shipping from './containers/Shipping/Shipping';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Switch>
        <Route path='/production' component={Production} />
          <Route path='/admin' component={Admin} />
          <Route path='/inventory' component={Inventory} />
          <Route path='/shipping' component={Shipping} />
          <Route path='/' exact component={Jumbotron} />
        </Switch>
      </BrowserRouter>


    );
  };
}

export default App;
