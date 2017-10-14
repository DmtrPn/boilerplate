import React from 'react';
import PropTypes from 'prop-types';
import {Button} from '../../common/Button/Button';
import './home.scss';

export function Home(props) {
    return (
        <main className="home">
            <Button className="countButton" onClick={props.onDectButton}>-</Button>
            <div className="count">
                {props.count}
            </div>
            <Button className="countButton" onClick={props.onIncrButton}>+</Button>
        </main>
    );
}

Home.propTypes = {
    count: PropTypes.number.isRequired,
    onDectButton: PropTypes.func.isRequired,
    onIncrButton: PropTypes.func.isRequired
};
