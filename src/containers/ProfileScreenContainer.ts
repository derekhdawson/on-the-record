import { Dispatch } from 'react';
import { connect } from 'react-redux';
import { HelloAction, setHello } from '../actions/helloActions';
import { AppState } from '../reducers/rootReducer';
import ProfileScreen from '../screens/Profile/ProfileScreen';

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

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);
