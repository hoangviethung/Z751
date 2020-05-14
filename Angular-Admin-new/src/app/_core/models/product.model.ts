import { ProductGroupModel } from './product-groups';

export class ProductModel {
	category: string;
	categoryId: number;
	categoryName: string;
	content: string;
	createDate: string;
	description: string;
	externalUrl: string;
	id: number;
	image: string;
	images: string;
	isHot: boolean;
	isPublished: boolean;
	language: null;
	languageId: number = 1;
	metaDescription: string;
	metaImage: string;
	metaKeywords: string;
	metaTitle: string;
	order: string;
	previewUrl: string;
	seName: string;
	title: string;
	updateDate: string;
}
