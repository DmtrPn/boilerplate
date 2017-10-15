import React from 'react';
import { NavLink } from 'react-router-dom';

import * as style from './header.scss';
import {Button} from '../Button';

export function Header() {
    return (
        <div className={style.header}>
            <NavLink to='/'>
                <Button className={style.headerButton}>Home</Button>
            </NavLink>
            <NavLink to='/about'>
                <Button className={style.headerButton}>About</Button>
            </NavLink>
        </div>
    );
}
