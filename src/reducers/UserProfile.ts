import { actionsEnum } from '../common/actionEnmus';

export interface UserProfileState {
  firstname: string;
}

const defaultUserState: () => UserProfileState = () => ({
  firstname: 'Sean Lee'
});

export const userProfileReducer = (state = defaultUserState(), action: any) => {
  switch (action.type) {
    case actionsEnum.UPDATE_USERPROFILE_NAME:
      return handleUpdateProfileAction(state, action.payload);
  }

  return state;
};

const handleUpdateProfileAction = (
  state: UserProfileState,
  firstname: string
) => {
  return {
    ...state,
    firstname
  };
};
