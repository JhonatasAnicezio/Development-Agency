import React from 'react';
import hdcagency from '../img/hdcagency_logo.svg';
import { linksHeader } from '../services';
import './Header.css';

function Header() {
  return(
    <header>
      <div className='container' id='nav-container'>
        <nav className='navbar navbar-expand-lg fixed-top'>
          <div className='navbar-brand'>
            <a href='#'>
              <img id='logo' src={ hdcagency } alt='hDCAgency'/>
              hDC Agency
            </a>
          </div>
          <button
            className='navbar-toggler' type='button' data-toggle='collapse'
            data-target='#navbar-links' aria-controls='navbar-links' aria-expanded='false'
            aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse justify-content-end' id='navbar-links'>
            <div className='navbar-nav'>
              { linksHeader.map((link, index) =>
                <a key={ index } className='nav-item nav-link' id={ link.id }>{ link.name }</a>
              ) }
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;