import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { reducers } from './reducers';
import { HelloWorldContainer } from './components';
import { NameEditContainer } from './components';
import { ColorDisplayer } from './components/colorDisplayer/colorDisplayer';

const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <NameEditContainer />
    <HelloWorldContainer />
    <ColorDisplayer />
  </Provider>,
  document.getElementById('root')
);
