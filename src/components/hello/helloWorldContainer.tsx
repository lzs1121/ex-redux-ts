import { connect } from 'react-redux';
import { State } from '../../reducers';
import { HelloWorldComponent } from './helloWorldComponent';

const mapStateToProps = (state: State) => {
	return {
		userName: state.userProfileReducer.firstname
	};
};

const mapDispatchToProps = () => {
	return {};
};

export const HelloWorldContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(HelloWorldComponent);
