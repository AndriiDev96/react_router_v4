import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Player from '../player/player.jsx';
import FullRoster from '../full_roster/full-roster.jsx';

// The Roster component matches one of two different 
// routes depending on the full pathname

class Roster extends Component{  
  render(){
    return (
      <Switch>
        <Route exact path='/roster' component={FullRoster}/>
        <Route path='/roster/:number' component={Player}/>
      </Switch>
    );
  }
}

export default Roster;