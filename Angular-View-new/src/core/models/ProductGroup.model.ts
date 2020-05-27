import { ProductModel } from "./Product.model";

export class ProductGroupModel {
	id: number;
	name: string;
	isPotential: boolean;
	languageId: number;
	products: ProductModel;
}
