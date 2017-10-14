import * as React from 'react';
import { connect } from 'react-redux';
import { Home} from './Home';
import {increment, decrement} from '../../store/counter/actions/index';

function mapStateToProps(state) {
    return {
        count: state.counter
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onIncrButton: () => dispatch(increment(2)),
        onDectButton: () => dispatch(decrement(1))
    };
}

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);


export { HomeContainer };