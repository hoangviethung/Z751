import { Image } from "./Image.model";

export class ProductModel {
	content: string;
	description: string;
	image: string;
	images: Array<Image>;
	metaDescription: string;
	metaImage: string;
	metaKeywords: string;
	metaTitle: string;
	order: string;
	title: string;
	url: string;
}
