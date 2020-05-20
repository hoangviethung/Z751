import { ImageModel } from './image.model';

export class ProductModel {
	category: string = null;
	categoryId: number = 0;
	categoryName: string = null;
	content: string = null;
	createDate: string = null;
	description: string = null;
	externalUrl: string = null;
	id: number;
	image: string = null;
	images: Array<ImageModel> = [];
	isHot: boolean = false;
	isPublished: boolean = true;
	language: number;
	languageId: number = 1;
	metaDescription: string = null;
	metaImage: string = null;
	metaKeywords: string = null;
	metaTitle: string = null;
	order: string = new Date().toISOString();
	previewUrl: string = null;
	seName: string = null;
	title: string = null;
	updateDate: string = null;
}
