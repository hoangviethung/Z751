import { Image } from "./Image.model";

export class SectionModel {
	content: string;
	id: number;
	image: string;
	images: Array<Image>;
	order: number;
	title: string;
}
