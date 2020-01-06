import { MemberEntity } from './../model/member';
import { actionsEnum } from '../common/actionEnmus';
import { memberAPI } from '../api/member';

export const memberRequestCompleted = (members: MemberEntity[]) => {
	return {
		type: actionsEnum.MEMBER_REQUEST_COMPLETED,
		payload: members
	};
};

export const memberRequest = () => (dispathcer: any) => {
	const promise = memberAPI.getAllMember();

	promise.then(data => dispathcer(memberRequestCompleted(data)));
};
