import { Component, OnInit, Inject } from "@angular/core";
import {
	HttpService,
	InputRequestOption,
} from "src/core/services/http.service";
import {
	PageInfoService,
	MetaModel,
} from "src/core/services/page-info.service";
import { ProductModel } from "src/core/models/Product.model";
import { API } from "src/core/configs/api";
import { PaginationModel } from "src/core/models/Pagination.model";
import { DOCUMENT } from "@angular/common";

@Component({
	selector: "app-capacity",
	templateUrl: "./capacity.component.html",
	styleUrls: ["./capacity.component.scss"],
})
export class CapacityComponent implements OnInit {
	pagination: PaginationModel = new PaginationModel(10, 1);
	totalItems: number;
	currentLanguage: string;
	products: Array<ProductModel> = [];
	pageTitle: string;
	pageDescription: string;
	title: string;
	breadcrumbs = [];

	constructor(
		private httpSvc: HttpService,
		private pageInfoSvc: PageInfoService,
		@Inject(DOCUMENT) private document: Document
	) {}

	setPageInformation(opts) {
		this.httpSvc.get(API.Category.Get, opts).subscribe((response) => {
			const metaObject: MetaModel = {
				title: response.data.metaTitle,
				keywords: response.data.metaKeywords,
				description: response.data.metaDescription,
				image: response.data.metaImage,
			};
			this.pageInfoSvc.setTitle(response.data.title);
			this.pageInfoSvc.setMeta(metaObject);
		});

		this.httpSvc.get(API.Common.Breadcrumb, opts).subscribe((response) => {
			this.breadcrumbs = response.data;
		});
	}

	ngOnInit() {
		const opts = new InputRequestOption();
		opts.params = {
			url: this.document.location.pathname,
			itemPerPage: "" + this.pagination.itemPerPage,
			page: "" + this.pagination.page,
		};
		this.getPageInfo(opts);
		this.getCapacities(opts);
		this.setPageInformation(opts);
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
			this.totalItems = response.data.total;
		});
	}

	refreshList(pageNumber) {
		const opts = new InputRequestOption();
		opts.params = {
			url: this.document.location.pathname,
			itemPerPage: "" + this.pagination.itemPerPage,
			page: "" + pageNumber,
		};
		this.getCapacities(opts);
	}
}
