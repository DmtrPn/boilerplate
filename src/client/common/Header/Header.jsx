import React from 'react';
import { NavLink } from 'react-router-dom';

import * as style from './header.scss';
import {Button} from '../Button';
import TIcon from '../Icon/svg/ok-mark.svg';
import {Icon} from '../Icon/Icon';

export function Header() {
    return (
        <div className={style.header}>
            <NavLink to='/'>
                <Button className={style.headerButton}>Home</Button>
            </NavLink>
            <NavLink to='/about'>
                <Button className={style.headerButton}>About</Button>
            </NavLink>
            <TIcon width="50" height="20" />
            <Icon iconType="OkIcon" />
        </div>
    );
}
