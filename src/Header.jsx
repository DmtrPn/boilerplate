import React from 'react';
import { NavLink } from 'react-router-dom';

// import './header.scss';

function Header() {
    return (
        <div className="home">
            home
            <NavLink to='/'><button>Go home</button></NavLink>
        </div>
    );
}

export default Header;
