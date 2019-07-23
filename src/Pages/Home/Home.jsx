import React, { PureComponent } from 'react';
import './style.css';

class Home extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            score: 0,
        }
    }

    onIncrease = () => {
        this.setState(state => ({
            score: state.score + 1
        }))
    };

    onReduce = () => {
        this.setState(state => ({
            score: state.score - 1
        }))
    };

    render() {
        return (
            <div className="home-page__wrapper">
                <button className="home-page__button" onClick={this.onIncrease}>+</button>
                <button className="home-page__button" onClick={this.onReduce}>-</button>
                <input className="home-page__content" value={this.state.score} readOnly/>
            </div>
        )
    }
}

export default Home;
