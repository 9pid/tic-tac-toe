import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import GameReducer from './reducers/GameReducer.js';
import GameContainer from './containers/GameContainer.js';

const store = createStore(GameReducer);

ReactDOM.render(
  <Provider store={store}>
    <GameContainer />
  </Provider>,
  document.getElementById('root')
);
