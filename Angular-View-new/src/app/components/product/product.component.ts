import { Component, OnInit, Output, EventEmitter, Inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import {
	HttpService,
	InputRequestOption,
} from "src/core/services/http.service";
import { PageInfoService } from "src/core/services/page-info.service";
import { LanguageService } from "src/core/services/language.service";
import { DOCUMENT } from "@angular/common";
import { API } from "src/core/configs/api";
import { ProductModel } from "src/core/models/Product.model";

@Component({
	selector: "app-product",
	templateUrl: "./product.component.html",
	styleUrls: ["./product.component.scss"],
})
export class ProductComponent implements OnInit {
	products: Array<ProductModel> = [];
	pageTitle: string;
	pageDescription: string;
	currentLanguage: string;
	Breadcrumb = {
		en: ["Home", "Products"],
		vi: ["Trang chủ", "Sản phẩm"],
	};
	breadcrumbs;

	constructor(
		private httpSvc: HttpService,
		private pageInfoSvc: PageInfoService,
		@Inject(DOCUMENT) document: Document
	) { }

	ngOnInit() {
		this.getProducts();
	}

	getProducts() {
		const opts = new InputRequestOption();
		opts.params = {
			url: document.location.pathname,
		};
		this.httpSvc.get(API.Category.Get, opts).subscribe((response) => {
			this.pageTitle = response.data.title;
			this.pageDescription = response.data.description;
			this.pageInfoSvc.setTitle(this.pageTitle);
		});
		this.httpSvc.get(API.Product.Gets, opts).subscribe((response) => {
			this.products = response.data;
		});
	}
}
