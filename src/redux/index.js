import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

const logger = createLogger({
  diff: true,
  collapsed: true,
});

const store = createStore(applyMiddleware(thunk, logger));

export default store;
