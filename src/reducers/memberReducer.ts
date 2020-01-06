import { actionsEnum } from '../common/actionEnmus';
import { MemberEntity } from '../model/member';

export type memberState = MemberEntity[];

export const memberReducer = (state: memberState = [], action: any) => {
	switch (action.type) {
		case actionsEnum.MEMBER_REQUEST_COMPLETED:
			return handleMemberRequestCompletedAction(state, action.payload);
	}

	return state;
};

const handleMemberRequestCompletedAction = (
	state: memberState,
	members: any
) => {
	return members;
};
