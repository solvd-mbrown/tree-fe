import {ITreeMemberDescendant} from '~interfaces/ITreeMemberDescendant';

export type TreePart = ITreeMemberDescendant[];

export class TreeMember {
	id: any;
	parentId: any;
	name: any;
	photo: any;

	constructor(id: any, parentId: any, name: any, photo: any) {
		this.id = id;
		this.parentId = parentId;
		this.name = name;
		this.photo = photo;
	}
}
