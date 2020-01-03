import { connect } from 'react-redux';
import { NameEditComponent } from './nameEdit';
import { updateUserProfileName } from '../../actions/UpdateUserProfileName';
import { State } from '../../reducers';

const mapStateToProps = (state: State) => {
  return {
    userName: state.userProfileReducer.firstname
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    onChange: (name: string) => dispatch(updateUserProfileName(name))
  };
};

export const NameEditContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NameEditComponent);
