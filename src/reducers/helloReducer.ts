import { HelloAction, SET_HELLO } from '../actions/helloActions';

export interface HelloState {
  helloText: string;
}

const initialState: HelloState = {
  helloText: 'hello',
};

export default function helloReducer(
  state: HelloState = initialState,
  action: HelloAction,
): HelloState {
  const newState = { ...state };
  switch (action.type) {
    case SET_HELLO:
      newState.helloText = action.helloText;
      return newState;
    default:
      return state;
  }
}
