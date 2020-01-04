import { actionsEnum } from '../common/actionEnmus';
import { Color } from '../model/color';

export interface UserProfileState {
	firstname: string;
	favouriteColor: Color;
}

const defaultUserState: () => UserProfileState = () => ({
	firstname: 'Sean Lee',
	favouriteColor: { red: 100, green: 100, blue: 300 }
});

export const userProfileReducer = (state = defaultUserState(), action: any) => {
	switch (action.type) {
		case actionsEnum.UPDATE_USERPROFILE_NAME:
			return handleUserProfileAction(state, action.payload);
		case actionsEnum.UPDATE_USERPROFILE_FAVOURITE_COLOR:
			return handleFavouriteColorAction(state, action);
	}

	// Later on we will have a switch statement to replace state on changes.
	return state;
};

const handleUserProfileAction = (state: UserProfileState, firstname: any) => {
	return {
		...state,
		firstname
	};
};

const handleFavouriteColorAction = (state: UserProfileState, action: any) => {
	return {
		...state,
		favouriteColor: action.newColor
	};
};
