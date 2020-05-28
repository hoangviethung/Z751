import {
	Component,
	OnInit,
	Input,
	Output,
	EventEmitter,
	Inject,
} from "@angular/core";
import { ActivatedRoute, Router, NavigationEnd } from "@angular/router";
import { PaginationModel } from "../../../../core/models/Pagination.model";
import { DOCUMENT } from "@angular/common";

@Component({
	selector: "app-pagination",
	templateUrl: "./pagination.component.html",
	styleUrls: ["./pagination.component.scss"],
})
export class PaginationComponent implements OnInit {
	pager;
	itemPerPage: number;
	@Input("pagination") pagination: PaginationModel = new PaginationModel(
		10,
		1
	);
	@Input("totalItems") totalItems: number = 0;
	@Output("change") change = new EventEmitter<any>();

	constructor(
		private router: Router,
		private activateRoute: ActivatedRoute,
		@Inject(DOCUMENT) private document: Document
	) {}
	ngOnInit() {
		this.itemPerPage = this.pagination.itemPerPage;
		this.pagination.page = this.pagination.page;
		this.choosepage(this.pagination.page, true);
		this.router.events.subscribe((event) => {
			if (event instanceof NavigationEnd) {
				this.choosepage(this.pagination.page, true);
			}
		});
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
		this.pagination.page = page;
		if (!isFirst) {
			const pathname = this.document.location.pathname;
			this.router.navigateByUrl(
				`${pathname}?page=${this.pagination.page}`,
				{
					queryParams: {
						page: this.pagination.page,
					},
				}
			);
		}
	}

	// Pagination function
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
