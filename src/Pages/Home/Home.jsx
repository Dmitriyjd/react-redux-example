import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './style.css';

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

Home.propTypes = {
  increaseCounter: PropTypes.func.isRequired,
  decreaseCounter: PropTypes.func.isRequired,
  counterValue: PropTypes.number.isRequired,
};

export default Home;
