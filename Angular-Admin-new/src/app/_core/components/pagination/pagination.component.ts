import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../../services/http.service';

@Component({
	selector: 'app-pagination',
	templateUrl: './pagination.component.html',
	styleUrls: ['./pagination.component.less'],
})
export class PaginationComponent implements OnInit {
	PAGE_SIZE = 12;
	pager;
	totalPage = 100;
	code;

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private httpSvc: HttpService
	) {}

	ngOnInit() {
		this.handlingQueryParams();
	}

	handlingQueryParams() {
		this.route.queryParams.subscribe((params) => {
			this.code = params.code || '';
			this.initData(params.page);
		});
	}

	initData(page) {
		this.httpSvc
			.get(`api/Product/used/total?categoryIds=${this.code}`)
			.subscribe((result) => {
				this.totalPage = result.data;
				this.choosepage(page || 1, true);
			});
	}

	choosepage(page, isFirst) {
		// debugger;
		page = Number(page);
		if (
			page < 1 ||
			(this.pager &&
				this.pager.totalPages != 0 &&
				page > this.pager.totalPages)
		) {
			return;
		}
		let totalPage = this.totalPage;
		page =
			totalPage / this.PAGE_SIZE < page
				? Math.ceil(totalPage / this.PAGE_SIZE)
				: page;
		this.pager = this.getPager(totalPage, page, this.PAGE_SIZE);
		if (!isFirst) {
			this.router.navigate(['/Product'], {
				queryParams: { code: this.code, page: this.pager.currentPage },
			});
		}
	}

	// Pagination functionc

	getPager(
		totalItems: number,
		currentPage: number = 1,
		pageSize: number = 10
	) {
		// calculate total pages
		let totalPages = Math.ceil(totalItems / pageSize);

		let startPage: number, endPage: number;
		if (totalPages <= 5) {
			// less than 5 total pages so show all
			startPage = 1;
			endPage = totalPages;
		} else {
			// more than 5 total pages so calculate start and end pages
			if (currentPage <= 3) {
				startPage = 1;
				endPage = 5;
			} else if (currentPage + 2 >= totalPages) {
				startPage = totalPages - 4;
				endPage = totalPages;
			} else {
				startPage = currentPage - 2;
				endPage = currentPage + 2;
			}
		}

		// calculate start and end item indexes
		let startIndex = (currentPage - 1) * pageSize;
		let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

		// create an array of pages to ng-repeat in the pager control
		let pages = this.range(startPage, endPage + 1);

		// return object with all pager properties required by the view
		return {
			totalItems: totalItems,
			currentPage: currentPage,
			pageSize: pageSize,
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
