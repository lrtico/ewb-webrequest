import React from 'react';
import './header.scss';
import logo from './logo.png';
import PropTypes from 'prop-types';
import HomeIcon from '@material-ui/icons/Home';
import AddIcon from '@material-ui/icons/Add';

const Header = () => {
  return (
    <nav className='primary'>
      <div className='primary__logo'>
        <img src={logo} alt='Logo' />
        <h1>
          <span>IT</span> Enhancement &amp; Change Request
        </h1>
      </div>
      <div className='primary__link btn'>
        <div className='btn__hover' />
        <HomeIcon style={{ color: 'white', fontSize: 36 }} />
        <div>
          <strong>Home</strong>
        </div>
      </div>
      <div className='primary__link btn'>
        <div className='btn__hover' />
        <AddIcon style={{ color: 'white', fontSize: 36 }} />
        <div>
          <strong>New</strong>
        </div>
      </div>
    </nav>
  );
};

Header.propTypes = {};

export default Header;
