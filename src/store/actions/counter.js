export const INCREASE_COUNTER = 'INCREASE_COUNTER';
export const DECREASE_COUNTER = 'DECREASE_COUNTER';

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
