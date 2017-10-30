import React from 'react';
import { NavLink } from 'react-router-dom';

import * as style from './header.scss';

export function Header() {
    return (
        <div className={style.header}>
            <NavLink
                to='/'
                exact
                className={style.headerLink}
                activeClassName={style.activeLink}
            >
                Home
            </NavLink>
            <NavLink
                to='/about'
                exact
                className={style.headerLink}
                activeClassName={style.activeLink}
            >
              About
            </NavLink>
            <NavLink
                to='/icons'
                exact
                className={style.headerLink}
                activeClassName={style.activeLink}
            >
                Icons
            </NavLink>
        </div>
    );
}
