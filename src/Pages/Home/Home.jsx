import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
    increaseCounter,
    decreaseCounter
} from '../../store/actions/counter';
import {
    PageWrapper,
    Button,
    Input
} from './styles';

class Home extends PureComponent {
    render() {
        return (
            <PageWrapper>
                <Button onClick={this.props.increaseCounter}>+</Button>
                <Button onClick={this.props.decreaseCounter}>-</Button>
                <Input value={this.props.counterValue} readOnly/>
            </PageWrapper>
        )
    }
}

const mapStateToProps = state => {
    return {
        counterValue: state.counter.value,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        increaseCounter: () => dispatch(increaseCounter(1)),
        decreaseCounter: () => dispatch(decreaseCounter(1)),
    }
};

Home.propTypes = {
  increaseCounter: PropTypes.func.isRequired,
  decreaseCounter: PropTypes.func.isRequired,
  counterValue: PropTypes.number.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
