import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home } from '../home/home.js';
import Roster from '../roster/roster.jsx';
import Sheduler from '../sheduler/sheduler.jsx';

class Main extends Component{

  render(){
    return (
      <main>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/roster' component={Roster}/>
          <Route path='/sheduler' component={Sheduler}/>
        </Switch>
      </main>
    );
  }
}

export default Main;