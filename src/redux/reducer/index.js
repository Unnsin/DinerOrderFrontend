import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import appReducer from './App'
import productReducer from './Product'
import busketReducer from './Busket'
import orderReducer from './Order'
import userReducer from './User'

export default combineReducers({
  router: routerReducer,
  app: appReducer,
  product: productReducer,
  busket: busketReducer,
  order: orderReducer,
  user: userReducer,
});
