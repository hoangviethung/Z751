import { Component, OnInit } from "@angular/core";
import {
	HttpService,
	InputRequestOption,
} from "src/core/services/http.service";
import { PageInfoService } from "src/core/services/page-info.service";
import { ProductModel } from "src/core/models/Product.model";
import { API } from "src/core/configs/api";

@Component({
	selector: "app-capacity",
	templateUrl: "./capacity.component.html",
	styleUrls: ["./capacity.component.scss"],
})
export class CapacityComponent implements OnInit {
	currentLanguage: string;
	products: Array<ProductModel> = [];
	pageTitle: string;
	pageDescription: string;
	title: string;
	Breadcrumb = {
		en: ["Home", "Capacities"],
		vi: ["Trang chủ", "Năng lực"],
	};
	breadcrumbs;

	constructor(
		private httpSvc: HttpService,
		private pageInfoSvc: PageInfoService
	) {}

	ngOnInit() {
		const opts = new InputRequestOption();
		opts.params = {
			url: document.location.pathname,
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
}
