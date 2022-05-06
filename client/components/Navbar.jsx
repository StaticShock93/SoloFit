import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import "bootstrap/js/src/collapse.js";



export default class Navbar extends Component {
  render() {
    return <nav className="navbar navbar-expand-lg navbar-light mb-4">
    <div className="container-fluid">
      <Link to='/createexercise' className="navbar-brand">FitnessTracker</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to='/exerciselog' className="nav-link">Exercise-Log</Link>
          </li>
          <li className="nav-item">
            <Link to='/createexercise' className="nav-link">Create Exercise</Link>
          </li>
          <li className="nav-item">
            <Link to='/createuser' className="nav-link">Create User</Link>
          </li>
          <li className="nav-item">
            <Link to='/userlogin' className="nav-link">Login</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  ;
  }
}
