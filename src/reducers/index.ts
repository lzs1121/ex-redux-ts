import { combineReducers } from 'redux';
import { userProfileReducer, UserProfileState } from './UserProfile';

export interface State {
	userProfileReducer: UserProfileState;
}

export const reducers = combineReducers<State>({
	userProfileReducer
});
