export class CategoryModel {
	createDate: string = null;
	description: string = null;
	externalUrl: string = null;
	id: number;
	image: string = null;
	isSystem: boolean;
	languageId: number = 1;
	metaDescription: string = null;
	metaImage: string = null;
	metaKeywords: string = null;
	metaTitle: string = null;
	order: number;
	parent: CategoryModel;
	parentId: number;
	parentName: string = null;
	previewUrl: string = null;
	seName: string = null;
	template: number = 1;
	title: string = null;
	updateDate: string = null;
	children?: Array<CategoryModel> = [];
}
