import { combineReducers } from 'redux';
import markerReducer from './markerReducer';
import recordReducer from './recordReducer';

const rootReducer = combineReducers({
  record: recordReducer,
  marker: markerReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
