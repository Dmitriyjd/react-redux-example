import Home from './Home';
import { connect } from 'react-redux';
import {
  increaseCounter,
  decreaseCounter,
} from '../../store/actions/counter';

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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
