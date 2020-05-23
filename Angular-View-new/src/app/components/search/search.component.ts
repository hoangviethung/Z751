import { Component, OnInit, Inject } from "@angular/core";
import { ProductModel } from "src/core/models/Product.model";
import {
	HttpService,
	InputRequestOption,
} from "src/core/services/http.service";
import { PageInfoService } from "src/core/services/page-info.service";
import { DOCUMENT } from "@angular/common";
import { API } from "src/core/configs/api";
import { ActivatedRoute } from "@angular/router";
import { PaginationModel } from "src/core/models/Pagination.model";

@Component({
	selector: "app-search",
	templateUrl: "./search.component.html",
	styleUrls: ["./search.component.scss"],
})
export class SearchComponent implements OnInit {
	products: Array<ProductModel> = [];
	pagination: PaginationModel = new PaginationModel(9, 1);
	totalItems;
	keywords: string;

	constructor(
		private httpSvc: HttpService,
		private pageInfoSvc: PageInfoService,
		private activatedRoute: ActivatedRoute,
		@Inject(DOCUMENT) private document: Document
	) {}

	ngOnInit() {
		this.activatedRoute.queryParams.subscribe((params) => {
			if (params.keywords) {
				this.keywords = params.keywords.trim();
				const opts = new InputRequestOption();
				opts.params = {
					text: this.keywords,
					itemPerPage: this.pagination.itemPerPage.toString(),
					page: this.pagination.page.toString(),
				};
				this.getProducts(opts);
			}
		});
	}

	getProducts(opts) {
		this.httpSvc.get(API.Product.Gets, opts).subscribe((response) => {
			this.pageInfoSvc.setTitle("Kết quả tìm kiếm cho " + this.keywords);
			if (response.code == 200 && response.data != null) {
				this.products = response.data.items;
				this.totalItems = response.data.total;
			}
		});
	}

	refreshList(pageNumber) {
		this.activatedRoute.queryParams.subscribe((params) => {
			console.log(params);
			
			if (params.keywords) {
				this.keywords = params.keywords.trim();
				const opts = new InputRequestOption();
				opts.params = {
					text: this.keywords,
					itemPerPage: this.pagination.itemPerPage.toString(),
					page: pageNumber.toString(),
				};
				this.getProducts(opts);
			}
		});
	}
}
