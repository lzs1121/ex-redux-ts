import { MemberEntity, createDefaultMemberEntity } from '../model/member';

class MemberAPI {
	getAllMember(): Promise<MemberEntity[]> {
		const getHubmemberUrl: string =
			'https://api.github.com/orgs/lemoncode/members';

		return fetch(getHubmemberUrl)
			.then(response => this.checkStatus(response))
			.then(response => this.parseJSON(response))
			.then(data => this.resolveMembers(data));
	}

	private checkStatus(response: Response): Promise<Response> {
		if (response.status >= 200 && response.status < 300) {
			return Promise.resolve(response);
		} else {
			let error = new Error(response.statusText);
			throw error;
		}
	}

	private parseJSON(response: Response): any {
		return response.json();
	}

	private resolveMembers(data: any): Promise<MemberEntity[]> {
		const members = data.map((gitHubMember: any) => {
			var member: MemberEntity = createDefaultMemberEntity();

			member.id = gitHubMember.id;
			member.login = gitHubMember.login;
			member.avatar_url = gitHubMember.avatar_url;

			return member;
		});

		return Promise.resolve(members);
	}
}

export const memberAPI = new MemberAPI();
