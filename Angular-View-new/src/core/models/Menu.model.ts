export class MenuModel {
	id: number;
	image: string;
	languageId: number;
	link: string;
	linkTarget: number;
	order: number;
	parentId: number;
	title: string;
	type: number;
	children: MenuModel[];
}
