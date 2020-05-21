export class PaginationModel {
	itemPerPage: number;
	page: number;
	
	constructor(itemPerpage: number, page: number) {
		this.itemPerPage = itemPerpage;
		this.page = page;
	}
}
