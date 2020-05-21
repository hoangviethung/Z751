import { Component, OnInit } from "@angular/core";
import {
	HttpService,
	InputRequestOption,
} from "src/core/services/http.service";
import { PageInfoService } from "src/core/services/page-info.service";
import { API } from "src/core/configs/api";
import { ProductModel } from "src/core/models/Product.model";
import { PaginationModel } from "src/core/models/Pagination.model";

@Component({
	selector: "app-product",
	templateUrl: "./product.component.html",
	styleUrls: ["./product.component.scss"],
})
export class ProductComponent implements OnInit {
	pagination: PaginationModel = new PaginationModel(9, 1);
	products: Array<ProductModel> = [];
	pageTitle: string;
	pageDescription: string;
	currentLanguage: string;
	breadcrumbs;
	totalItems: number;

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
		this.getProducts(opts);
	}

	getPageInfo(opts) {
		this.httpSvc.get(API.Category.Get, opts).subscribe((response) => {
			this.pageTitle = response.data.title;
			this.pageDescription = response.data.description;
			this.pageInfoSvc.setTitle(this.pageTitle);
		});
	}

	getProducts(opts) {
		this.httpSvc.get(API.Product.Gets, opts).subscribe((response) => {
			this.products = response.data.items;
			this.totalItems = response.data.total;
		});
	}

	refreshList(pageNumber) {
		const opts = new InputRequestOption();
		opts.params = {
			url: document.location.pathname,
			itemPerPage: "" + this.pagination.itemPerPage,
			page: pageNumber,
		};
		this.getProducts(opts);
	}
}
