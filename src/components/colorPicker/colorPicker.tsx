import * as React from 'react';
import { Color } from '../../model/color';
import { ColorSider } from './components/colorSider';

interface Props {
	color: Color;
	onColorUpdated: (color: Color) => void;
}

export const ColorPicker = (props: Props) => {
	return (
		<div>
			<ColorSider
				value={props.color.red}
				onValueUpdated={value =>
					props.onColorUpdated({
						red: value,
						green: props.color.green,
						blue: props.color.blue
					})
				}
			/>
			<br />
			<ColorSider
				value={props.color.green}
				onValueUpdated={value =>
					props.onColorUpdated({
						red: props.color.red,
						green: value,
						blue: props.color.blue
					})
				}
			/>
			<br />
			<ColorSider
				value={props.color.blue}
				onValueUpdated={value =>
					props.onColorUpdated({
						red: props.color.red,
						green: props.color.green,
						blue: value
					})
				}
			/>
		</div>
	);
};
