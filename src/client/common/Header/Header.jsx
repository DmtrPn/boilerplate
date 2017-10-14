import React from 'react';
import { NavLink } from 'react-router-dom';

import './header.scss';
import {Button} from '../Button';

export function Header() {
    return (
        <div className="header">
            <NavLink to='/'>
                <Button className="headerButton">Home</Button>
            </NavLink>
            <NavLink to='/about'>
                <Button className="headerButton">About</Button>
            </NavLink>
        </div>
    );
}
