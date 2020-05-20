export class BannerModel {
	id: number;
	name: string = null;
	description: string = null;
	link: string = null;
	altImage: string = null;
	resourcePath: string = null;
	order: number;
	isPublished: boolean;
	isVideo: boolean;
	languageId: number = 1;
}
