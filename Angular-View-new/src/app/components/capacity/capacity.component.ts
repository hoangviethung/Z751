import { Component, OnInit } from "@angular/core";
import {
	HttpService,
	InputRequestOption,
} from "src/core/services/http.service";
import { PageInfoService } from "src/core/services/page-info.service";
import { ProductModel } from "src/core/models/Product.model";
import { API } from "src/core/configs/api";
import { PaginationModel } from "src/core/models/Pagination.model";

@Component({
	selector: "app-capacity",
	templateUrl: "./capacity.component.html",
	styleUrls: ["./capacity.component.scss"],
})
export class CapacityComponent implements OnInit {
	pagination: PaginationModel = new PaginationModel(9, 1);
	totalItems: number;
	currentLanguage: string;
	products: Array<ProductModel> = [];
	pageTitle: string;
	pageDescription: string;
	title: string;

	constructor(
		private httpSvc: HttpService,
		private pageInfoSvc: PageInfoService
	) {}

	ngOnInit() {
		const opts = new InputRequestOption();
		opts.params = {
			url: document.location.pathname,
			itemPerPage: "" + this.pagination.itemPerPage,
			page: "" + this.pagination.page,
		};
		this.getPageInfo(opts);
		this.getCapacities(opts);
	}

	getPageInfo(opts) {
		this.httpSvc.get(API.Category.Get, opts).subscribe((response) => {
			this.pageTitle = response.data.title;
			this.pageDescription = response.data.description;
			this.pageInfoSvc.setTitle(this.pageTitle);
		});
	}

	getCapacities(opts) {
		this.httpSvc.get(API.Product.Gets, opts).subscribe((response) => {
			this.products = response.data.items;
		});
	}

	refreshList(pageNumber) {
		const opts = new InputRequestOption();
		opts.params = {
			url: document.location.pathname,
			itemPerPage: "" + this.pagination.itemPerPage,
			page: "" + pageNumber,
		};
		this.getCapacities(opts);
	}
}
