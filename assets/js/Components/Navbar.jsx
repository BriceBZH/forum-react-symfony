import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/usersList">Membres</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
