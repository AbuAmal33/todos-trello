import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import todosReducer from './todos';

const logger = createLogger({
  diff: true,
  collapsed: true,
});

const rootReducer = combineReducers({
  todos: todosReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
