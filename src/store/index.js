import axios from 'axios';
import { applyMiddleware, compose, createStore } from 'redux';
import * as api from '../config';
import { rootReducuer } from './root-reducer';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducuer,
  composeEnhancers(
    applyMiddleware(
      thunk.withExtraArgument({
        client: axios,
        api,
      }),
    ),
  ),
);
