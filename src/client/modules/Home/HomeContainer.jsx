import * as React from 'react';
import { connect } from 'react-redux';
import { Home} from './Home';
import {increment, decrement} from '../../store/counter/actions/index';

@connect(mapStateToProps, mapDispatchToProps)
class HomeContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <Home {...this.props} />;
    }
}

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

export {HomeContainer};