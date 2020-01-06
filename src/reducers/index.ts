import { combineReducers } from 'redux';
import { userProfileReducer, UserProfileState } from './UserProfile';
import { memberReducer, memberState } from './memberReducer';

export interface State {
	userProfileReducer: UserProfileState;
	memberReducer: memberState;
}

export const reducers = combineReducers<State>({
	userProfileReducer,
	memberReducer
});
