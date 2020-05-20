export class ArticleModel {
	id: number;
	title: string = null;
	seName: string = null;
	description: string = null;
	content: string = null;
	image: string = null;
	imageFolder: string = null;
	isPublished: boolean = true;
	isHot: boolean = false;
	order: string = new Date().toISOString();
	categoryId: number;
	categoryName: string = null;
	languageId: number = 1;
	metaTitle: string = null;
	metaImage: string = null;
	metaDescription: string = null;
	metaKeywords: string = null;
	externalUrl: string = null;
}
