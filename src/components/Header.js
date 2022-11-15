import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import hdcagency from '../img/hdcagency_logo.svg';
import { linksHeader } from '../services';
import './Header.css';

function Header() {
  return(
    <header>
      <div className='container' id='nav-container'>
        <Navbar variant='dark' expand="lg" fixed='top'>
          <Navbar.Brand href="#home">
            <img id='logo' src={ hdcagency } alt='hDCAgency'/>
            hDC Agency
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              { linksHeader.map((link, index) =>
                <a href={ link.href } key={ index } className='nav-item nav-link' id={ link.id }>{ link.name }</a>
              ) }
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </header>
  );
}

export default Header;