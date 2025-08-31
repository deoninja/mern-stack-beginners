import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <h1>MERN Stack App</h1>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/login">Login</a></li>
          <li><a href="/dashboard">Dashboard</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

