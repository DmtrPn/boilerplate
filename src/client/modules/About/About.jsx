import React from 'react';
import PropTypes from 'prop-types';

import * as style from './about.scss';
import { Button } from '../../common/Button';

export function About(props) {
    return (
        <div className={style.about}>
            <h1 className={style.title}>Getting data from server</h1>
            <h1 className={style.subTitle}>Without redux</h1>
            <p className={style.data}>{props.testData}</p>
            <Button onClick={props.onGetDataButtonClick}>Without redux</Button>
            <br/>
            <h1 className={style.subTitle}>With redux</h1>
            <p className={style.data}>{props.storeData}</p>
            <Button onClick={props.onGetDataFromStoreButtonClick}>With redux</Button>
        </div>
    );
}


About.propTypes = {
    testData: PropTypes.string.isRequired,
    storeData: PropTypes.string.isRequired,
    onGetDataButtonClick: PropTypes.func.isRequired,
    onGetDataFromStoreButtonClick: PropTypes.func.isRequired
};
