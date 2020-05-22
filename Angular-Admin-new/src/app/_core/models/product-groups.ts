export class ProductGroupModel {
	id: number;
	name: string = null;
	languageId: number = 1;
	productIds: Array<number> = [];
	isPotential: boolean;
}
