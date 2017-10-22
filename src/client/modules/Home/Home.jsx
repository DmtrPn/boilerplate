import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../../common/Button';

import * as style from './home.scss';

export function Home(props) {
    return (
        <main className={style.home}>
            <Button className={style.countButton} onClick={props.onDectButton}>-</Button>
            <div className={style.count}>
                {props.count}
            </div>
            <Button className={style.countButton} onClick={props.onIncrButton}>+</Button>
        </main>
    );
}

Home.propTypes = {
    count: PropTypes.number.isRequired,
    onDectButton: PropTypes.func.isRequired,
    onIncrButton: PropTypes.func.isRequired
};
