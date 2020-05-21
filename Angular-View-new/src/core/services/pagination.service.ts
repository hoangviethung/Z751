import { Injectable } from "@angular/core";

@Injectable({
	providedIn: "root",
})
export class PaginationService {
	constructor() {}

	getPager(total: number, page: number = 1, itemPerPage: number = 10) {
		// calculate total pages
		let totalPages = Math.ceil(total / itemPerPage);

		let startPage: number, endPage: number;
		if (totalPages <= 5) {
			// less than 5 total pages so show all
			startPage = 1;
			endPage = totalPages;
		} else {
			// more than 5 total pages so calculate start and end pages
			if (page <= 3) {
				startPage = 1;
				endPage = 5;
			} else if (page + 2 >= totalPages) {
				startPage = totalPages - 4;
				endPage = totalPages;
			} else {
				startPage = page - 2;
				endPage = page + 2;
			}
		}

		// calculate start and end item indexes
		let startIndex = (page - 1) * itemPerPage;
		let endIndex = Math.min(startIndex + itemPerPage - 1, total - 1);

		// create an array of pages to ng-repeat in the pager control
		let pages = this.range(startPage, endPage + 1);

		// return object with all pager properties required by the view
		return {
			total: total,
			page: page,
			itemPerPage: itemPerPage,
			totalPages: totalPages,
			startPage: startPage,
			endPage: endPage,
			startIndex: startIndex,
			endIndex: endIndex,
			pages: pages,
		};
	}

	range(start, stop, step = 1) {
		return Array(Math.ceil((stop - start) / step))
			.fill(start)
			.map((x, y) => x + y * step);
	}
}
