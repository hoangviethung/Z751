import { Component, OnInit, Inject } from "@angular/core";
import {
	HttpService,
	InputRequestOption,
} from "src/core/services/http.service";
import {
	PageInfoService,
	MetaModel,
} from "src/core/services/page-info.service";
import { API } from "src/core/configs/api";
import { ProductModel } from "src/core/models/Product.model";
import { PaginationModel } from "src/core/models/Pagination.model";
import { DOCUMENT } from "@angular/common";

@Component({
	selector: "app-product",
	templateUrl: "./product.component.html",
	styleUrls: ["./product.component.scss"],
})
export class ProductComponent implements OnInit {
	pagination: PaginationModel = new PaginationModel(9, 1);
	totalItems: number;
	products: Array<ProductModel> = [];
	pageTitle: string;
	pageDescription: string;
	currentLanguage: string;
	breadcrumbs;

	constructor(
		private httpSvc: HttpService,
		private pageInfoSvc: PageInfoService,
		@Inject(DOCUMENT) private document: Document
	) {}

	ngOnInit() {
		const opts = new InputRequestOption();
		opts.params = {
			url: this.document.location.pathname,
			itemPerPage: "" + this.pagination.itemPerPage,
			page: "" + this.pagination.page,
		};
		this.getProducts(opts);
		this.setPageInformation(opts);
	}

	setPageInformation(opts) {
		this.httpSvc.get(API.Category.Get, opts).subscribe((response) => {
			const metaObject: MetaModel = {
				title: response.data.metaTitle,
				keywords: response.data.metaKeywords,
				description: response.data.metaDescription,
				image: response.data.metaImage,
			};
			this.pageTitle = response.data.title;
			this.pageInfoSvc.setTitle(response.data.title);
			this.pageInfoSvc.setMeta(metaObject);
		});

		this.httpSvc.get(API.Common.Breadcrumb, opts).subscribe((response) => {
			this.breadcrumbs = response.data;
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
			url: this.document.location.pathname,
			itemPerPage: "" + this.pagination.itemPerPage,
			page: pageNumber,
		};
		this.getProducts(opts);
	}
}
