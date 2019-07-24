import {
  INCREASE_COUNTER,
  DECREASE_COUNTER
} from '../constants/actions'

export function increaseCounter(increment) {
  return {
    type: INCREASE_COUNTER,
    payload: increment,
  }
}

export function decreaseCounter(decrement) {
  return {
    type: DECREASE_COUNTER,
    payload: decrement,
  }
}
