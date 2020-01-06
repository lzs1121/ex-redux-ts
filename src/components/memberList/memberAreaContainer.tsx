import { connect } from 'react-redux';
import { MemberAreaComponent } from './memberArea';
import { memberRequest } from '../../actions/memberRequest';
import { State } from '../../reducers';

const mapStateToProps = (state: State) => {
	return {
		members: state.memberReducer
	};
};

const mapDispatchToProps = (dispatch: any) => {
	return {
		loadMembers: () => {
			return dispatch(memberRequest());
		}
	};
};

export const MemberAreaContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(MemberAreaComponent);
