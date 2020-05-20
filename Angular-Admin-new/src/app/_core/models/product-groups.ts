export class ProductGroupModel {
	id: number;
	name: string = null;
	languageId: number;
	productIds: Array<number> = [];
	isPotential: boolean;
}
