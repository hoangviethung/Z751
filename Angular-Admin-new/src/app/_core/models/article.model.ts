export class ArticleModel {
	id: number;
	title: string = '';
	seName: string = '';
	description: string = '';
	content: string = '';
	image: string = '';
	imageFolder: string = '';
	isPublished: boolean = true;
	isHot: boolean = false;
	order: string = new Date().toISOString();
	categoryId: number;
	categoryName: string = '';
	languageId: number = 1;
	metaTitle: string = '';
	metaImage: string = '';
	metaDescription: string = '';
	metaKeywords: string = '';
	externalUrl: string = '';
}
