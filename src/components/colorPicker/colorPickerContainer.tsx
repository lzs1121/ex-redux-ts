import { connect } from 'react-redux';

import { State } from '../../reducers';
import { Color } from '../../model/color';
import { ColorPicker } from './colorPicker';
import { updateFavouriteColor } from '../../actions/UpdateFavouriteColor';

const mapStateToProps = (state: State) => ({
	color: state.userProfileReducer.favouriteColor
});

const mapDispatchToProps = (dispatch: Function) => ({
	onColorUpdated: (color: Color) => dispatch(updateFavouriteColor(color))
});

export const ColorPickerContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(ColorPicker);
