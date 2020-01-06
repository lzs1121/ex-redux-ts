import * as React from 'react';
import { MemberEntity } from '../../model/member';
import { MemberTableComponent } from './components/memberTableComponents';

interface Props {
	members: Array<MemberEntity>;
	loadMembers: () => any;
}

export const MemberAreaComponent = (props: Props) => {
	return (
		<div>
			<MemberTableComponent members={props.members} />
			<br />
			<input
				type='submit'
				value='load'
				className=''
				onClick={() => props.loadMembers()}
			/>
		</div>
	);
};
