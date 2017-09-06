import React from 'react';
import {Link } from 'react-router-dom';

export default class NavBar extends React.Component {
  render() {
    return (
  	 <nav className="navBar navbar navbar-expand navbar-dark bg-dark">
        < Link to="/" className="navbar-brand"> The Real Soccer Place</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/Laliga" className="nav-link"> La Liga</Link>
            </li>
            <li className="nav-item">
              <Link to="/Bundes" className="nav-link"> Bundes Liga</Link>
            </li>
            <li className="nav-item">
              <Link to="/Premier"  className="nav-link"> Premier League</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

