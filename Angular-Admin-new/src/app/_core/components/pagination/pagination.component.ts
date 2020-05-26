import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'app-pagination',
	templateUrl: './pagination.component.html',
	styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit {
	pager;
	code;
	@Input('itemPerPage') itemPerPage: number;
	@Input('totalItems') totalItems: number;
	@Input('url') url: string;
	@Input('keywords') keywords: string = null;
	@Output('changePage') changePage: EventEmitter<number> = new EventEmitter<
		number
	>();

	constructor(private router: Router) {}

	ngOnInit() {
		this.handlingQueryParams();
	}

	handlingQueryParams() {
		this.initData('1');
	}

	initData(page) {
		this.choosepage(page || 1, true);
	}

	choosepage(page, isFirst?) {
		page = Number(page);
		if (
			page < 1 ||
			(this.pager &&
				this.pager.totalPages != 0 &&
				page > this.pager.totalPages)
		) {
			return;
		}

		let totalItems = this.totalItems;

		page =
			totalItems / this.itemPerPage < page
				? Math.ceil(totalItems / this.itemPerPage)
				: page;

		this.pager = this.getPager(totalItems, page, this.itemPerPage);

		if (!isFirst) {
			if (this.url == '/search') {
				this.router.navigate([this.url], {
					queryParams: {
						page: this.pager.page,
						keywords: this.keywords,
					},
					skipLocationChange: true,
				});
			} else {
				this.router.navigate([this.url], {
					queryParams: { page: this.pager.page },
					skipLocationChange: true,
				});
			}
		}

		this.changePage.emit(this.pager.page);
	}

	// Pagination functionc

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
