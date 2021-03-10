import { combineReducers, createStore } from 'redux';
import tokenReducer from './tokens';
import tokenDetailReducer from './tokenDetails';
import errorReducer from './errors';

const rootReducer = combineReducers({
  tokens: tokenReducer,
  tokenDetail: tokenDetailReducer,
  error: errorReducer,
});

const store = createStore(rootReducer);

export default store;
