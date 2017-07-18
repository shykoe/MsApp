export const TAP_OPTION_PRESSED = 'TAP_OPTION_PRESSED';
const LearnTab = 'Learn';

const initialState = {
  pressedOption: LearnTab
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case TAP_OPTION_PRESSED:
      return {pressedOption: action.payload };
    default:
      return state;
  }
}

export function tapOptionPressed(pressedTapOption) {
  return {
    type: TAP_OPTION_PRESSED,
    payload: pressedTapOption
  };
}