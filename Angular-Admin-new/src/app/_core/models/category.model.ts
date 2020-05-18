export class CategoryModel {
	createDate: string;
	description: string;
	externalUrl: string;
	id: number;
	image: string;
	isSystem: boolean;
	languageId: number = 1;
	metaDescription: string;
	metaImage: string;
	metaKeywords: string;
	metaTitle: string;
	order: number;
	parent: CategoryModel;
	parentId: number;
	parentName: string;
	previewUrl: string;
	seName: string;
	template: number = 1;
	title: string;
	updateDate: string;
	children?: Array<CategoryModel> = [];
}
