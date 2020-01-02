import { createStore, compose } from 'redux';
import { rootReducers } from './reducers';

const composeEnhancer = compose;

export const store = createStore(rootReducers, {}, composeEnhancer);
