import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      <Link to="/movies">Movies</Link>
      <Link to="/actors">Actors</Link>
      <Link to="/directors">Directors</Link>
    </div>
  );
};

export default NavBar;
