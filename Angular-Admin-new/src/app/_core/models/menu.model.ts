export class MenuModel {
	id: number;
	title: string = null;
	order: number;
	link: string = null;
	image: string = null;
	linkTarget: string = null;
	parentId: number;
	parentName: string = null;
	type: number = 0;
	languageId: number = 1;
}
