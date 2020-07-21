import React from 'react';
import './Header.scss';
import logo from '../../assets/png/logo.png'


function Header() {
    return (
        <header className="header">
            <a className="logo-link" href="#">
                <img className="logo" src={logo} alt="logo"/>
            </a>
        </header>
    )
}

export default Header;
