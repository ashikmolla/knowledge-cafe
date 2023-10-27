import React from 'react';
import './Header.css'
import logo from '../../images/logo.jpg'

const Header = () => {
    return (
        <div className='header'>
            <h1>Knowledge Hafe</h1>
            <img src={logo} alt="" />
        </div>
    );
};

export default Header;