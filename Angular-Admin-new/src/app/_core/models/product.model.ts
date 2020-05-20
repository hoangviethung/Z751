import { ImageModel } from './image.model';

export class ProductModel {
	category: string = '';
	categoryId: number = 0;
	categoryName: string = '';
	content: string = '';
	createDate: string = '';
	description: string = '';
	externalUrl: string = '';
	id: number;
	image: string = '';
	images: Array<ImageModel> = [];
	isHot: boolean = false;
	isPublished: boolean = false;
	language: number;
	languageId: number = 1;
	metaDescription: string = '';
	metaImage: string = '';
	metaKeywords: string = '';
	metaTitle: string = '';
	order: string = new Date().toISOString();
	previewUrl: string = '';
	seName: string = '';
	title: string = '';
	updateDate: string = '';
}
