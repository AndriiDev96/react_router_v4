import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// The Header component creates links that can be used to
// navigate between routes.

class Header extends Component{
  
  render(){
    return (
      <header>
        <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/roster'>Roster</Link></li>
            <li><Link to='/sheduler'>Sheduler</Link></li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;