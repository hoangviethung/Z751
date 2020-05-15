import { Image } from "./Image.model";

export class ProductModel {
	Title: string;
	SubTitle: string;
	Description: string;
	Content: string;
	Time: string;
	Image: string;
	Images: Array<Image>;
	Url: string;
	CategoryUrl: string;
	Id: string;
	View: number;
	Like: number;
}
