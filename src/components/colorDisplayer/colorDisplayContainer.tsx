import { connect } from 'react-redux';
import { ColorDisplayer } from './colorDisplayer';
import { State } from '../../reducers/index';

const mapStateToProps = (state: State) => {
	return {
		color: state.userProfileReducer.favouriteColor
	};
};

const mapDispatchToProps = (dispatch: any) => ({});

export const ColorDisplayerContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(ColorDisplayer);
