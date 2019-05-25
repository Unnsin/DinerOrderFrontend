import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import appReducer from './App'

export default combineReducers({
  router: routerReducer,
  app: appReducer
});
