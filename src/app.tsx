import * as React from 'react';

import {
	HelloWorldContainer,
	NameEditContainer,
	ColorDisplayerContainer,
	ColorPickerContainer,
	MemberAreaContainer
} from './components';

export const App = () => {
	return (
		<div>
			<HelloWorldContainer />
			<NameEditContainer />
			<br />
			<ColorDisplayerContainer />
			<br />
			<ColorPickerContainer />
			<br />
			<MemberAreaContainer />
		</div>
	);
};
