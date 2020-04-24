import React, { Component } from 'react';
import { PlayerAPI } from '../../API/index.js';
import { Link } from 'react-router-dom';

class Player extends Component{
  render(){
    const playerID = parseInt(this.props.match.params.number);
    const player = PlayerAPI.get(playerID);
    
    if(!player){
      return <div>Sorry, but the player was not found</div>
    }

    return (
      <div>
        <h1>{ player.name } (#{ player.number })</h1>
        <h2>Position: { player.position }</h2>
        <Link to='/roster'>Back</Link>
      </div>
    );
  }
}

export default Player;