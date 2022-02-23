import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return(
    <nav className='header'>
      <ul>
        <li>
          <Link to="/" className='headerLink'>Home</Link>
        </li>
        <li>
          <Link to="/users">About</Link>
        </li>    
      </ul>
    </nav>  
  );
}