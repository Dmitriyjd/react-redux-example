import {
  INCREASE_COUNTER,
  DECREASE_COUNTER
} from '../actions/counter'

const initialState = { value: 0 };
function counter(state = initialState, action){
  switch (action.type) {
    case INCREASE_COUNTER:
      return {
        ...state,
        value: state.value + action.payload,
      };
    case DECREASE_COUNTER:
      return {
        ...state,
        value: state.value - action.payload,
      };
    default: return state;
  }
}

export default counter;
