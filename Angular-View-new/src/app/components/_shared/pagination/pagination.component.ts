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
	@Output("changePage") changePage: EventEmitter<number> = new EventEmitter<
		number
	>();

	constructor(
		private pagerService: PaginationService,
		private route: ActivatedRoute,
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
		console.log("change Paged");

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
			this.router.navigate(["/products"], {
				queryParams: { page: this.pager.page },
				skipLocationChange: true,
			});
		}

		this.changePage.emit(this.pager.page);
	}
}
