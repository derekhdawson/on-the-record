import { Dispatch } from 'react';
import { connect } from 'react-redux';
import { HelloAction, setHello } from '../actions/helloActions';
import RecordScreen from '../components/RecordScreen';

import { AppState } from '../reducers/rootReducer';

const mapStateToProps = (state: AppState) => {
  return {
    hello: state.hello.helloText,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<HelloAction>) => ({
  setText: (text: string) => {
    dispatch(setHello(text));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(RecordScreen);
