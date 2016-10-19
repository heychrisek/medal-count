import rootReducer from '../reducers';
import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';

export default () => {
  return createStore(
    rootReducer,
    applyMiddleware(thunkMiddleware)
  );
};