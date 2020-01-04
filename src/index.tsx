import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { reducers } from './reducers';
import { HelloWorldContainer } from './components';
import { NameEditContainer } from './components';
import { ColorDisplayerContainer } from './components/colorDisplayer/colorDisplayContainer';
import { ColorPickerContainer } from './components/colorPicker/colorPickerContainer';

const store = createStore(reducers);

ReactDOM.render(
	<Provider store={store}>
		<NameEditContainer />
		<HelloWorldContainer />
		<br />
		<ColorDisplayerContainer />
		<br />
		<ColorPickerContainer />
	</Provider>,
	document.getElementById('root')
);
