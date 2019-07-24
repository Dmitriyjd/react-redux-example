import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './style.css';
import {
    increaseCounter,
    decreaseCounter
} from '../../store/actions/counter';

class Home extends PureComponent {
    render() {
        return (
            <div className="home-page__wrapper">
                <button className="home-page__button" onClick={this.props.increaseCounter}>+</button>
                <button className="home-page__button" onClick={this.props.decreaseCounter}>-</button>
                <input className="home-page__content" value={this.props.counterValue} readOnly/>
            </div>
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
