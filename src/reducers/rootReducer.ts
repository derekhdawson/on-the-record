import { combineReducers } from 'redux';
import helloReducer from './helloReducer';

const rootReducer = combineReducers({
  hello: helloReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
