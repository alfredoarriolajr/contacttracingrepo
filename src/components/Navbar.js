import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="container snavbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">Contact Tracing</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/passport" className="nav-link">Passport</Link>
          </li>
          <li className="navbar-item">
          <Link to="/history" className="nav-link">History</Link>
          </li>
          <li className="navbar-item">
          <Link to="/profile" className="nav-link">Profile</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}