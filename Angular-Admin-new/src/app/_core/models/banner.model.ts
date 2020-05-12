export class BannerModel {
	id: number;
	name: string;
	description: string;
	link: string;
	altImage: string;
	resourcePath: string;
	order: number;
	isPublished: boolean;
	isVideo: boolean;
	languageId: number = 1;
}
