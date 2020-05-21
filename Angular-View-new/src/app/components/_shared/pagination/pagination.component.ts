import { Component, OnInit } from "@angular/core";
import { HttpService } from "src/core/services/http.service";
import { ActivatedRoute, Router } from "@angular/router";
import { PaginationService } from "src/core/services/pagination.service";

@Component({
	selector: "app-pagination",
	templateUrl: "./pagination.component.html",
	styleUrls: ["./pagination.component.scss"],
})
export class PaginationComponent implements OnInit {
	PAGE_SIZE = 12;
	pager;
	totalPage = 100;
	code;

	constructor(
		private pagerService: PaginationService,
		private route: ActivatedRoute,
		private router: Router,
		private httpService: HttpService
	) {}

	ngOnInit() {
		this.handlingQueryParams();
	}

	handlingQueryParams() {
		this.route.queryParams.subscribe((params) => {
			this.code = params.code || "";
			this.initData(params.page);
		});
	}

	initData(page) {
		this.httpService
			.get(`/api/Product/used/total?categoryIds=${this.code}`)
			.subscribe((result) => {
				this.totalPage = result.data;
				this.choosepage(page || 1, true);
			});
	}

	choosepage(page, isFirst?) {
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
		this.pager = this.pagerService.getPager(
			totalPage,
			page,
			this.PAGE_SIZE
		);
		if (!isFirst) {
			this.router.navigate(["/Product"], {
				queryParams: { code: this.code, page: this.pager.currentPage },
			});
		}
	}
}
