import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import appReducer from './App'
import productReducer from './Product'

export default combineReducers({
  router: routerReducer,
  app: appReducer,
  product: productReducer,
});
