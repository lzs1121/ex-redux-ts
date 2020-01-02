export interface UserProfileState {
	firstname: string;
}

const defaultUserState: () => UserProfileState = () => ({
	firstname: 'Sean Lee'
});

export const userProfileReducer = (state = defaultUserState(), action: any) => {
	return state;
};
