import {
	Component,
	OnInit,
	Input,
	Inject,
	Output,
	EventEmitter,
} from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { PaginationService } from "src/core/services/pagination.service";
import { DOCUMENT } from "@angular/common";

@Component({
	selector: "app-pagination",
	templateUrl: "./pagination.component.html",
	styleUrls: ["./pagination.component.scss"],
})
export class PaginationComponent implements OnInit {
	pager;
	code;
	@Input("itemPerPage") itemPerPage: number;
	@Input("totalItems") totalItems: number;
	@Input("url") url: string;
	@Input("keywords") keywords: string = null;
	@Output("changePage") changePage: EventEmitter<number> = new EventEmitter<
		number
	>();

	constructor(
		private pagerService: PaginationService,
		private router: Router
	) {}

	ngOnInit() {
		this.handlingQueryParams();
	}

	handlingQueryParams() {
		this.initData("1");
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

		this.pager = this.pagerService.getPager(
			totalItems,
			page,
			this.itemPerPage
		);

		if (!isFirst) {
			if (this.url == "/search") {
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
}
