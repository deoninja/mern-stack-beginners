import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="App-header">
      <h1>MERN Stack for Beginners</h1>
      <nav>
        <Link to="/">Home</Link> | <Link to="/login">Login</Link> |{' '}
        <Link to="/dashboard">Dashboard</Link>
      </nav>
    </header>
  );
}

export default Header;
