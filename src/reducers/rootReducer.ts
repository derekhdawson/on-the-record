import { combineReducers } from 'redux';
import recordReducer from './recordReducer';

const rootReducer = combineReducers({
  record: recordReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
