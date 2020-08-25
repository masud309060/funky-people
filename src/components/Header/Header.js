import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            <h1 className="header">Funky People</h1>
        <nav className="nav-bar">
            <a href="/home">Home</a>
            <a href="/messege">Messege</a>
            <a href="/notification">Notification</a>
        </nav>
        </div>
    );
};

export default Header;