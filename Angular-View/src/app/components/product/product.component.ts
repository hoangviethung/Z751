import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HttpService } from "src/app/services/http.service";
import { PageInfoService } from "src/app/services/page-info.service";
import { LanguageService } from "src/app/services/language.service";

@Component({
	selector: "app-product",
	templateUrl: "./product.component.html",
	styleUrls: ["./product.component.scss"],
})
export class ProductComponent implements OnInit {
	products = [];
	title: string;
	currentLanguage: string;
	description: string;
	Breadcrumb = {
		en: ["Home", "Products"],
		vi: ["Trang chủ", "Sản phẩm"],
	};
	breadcrumbs;

	constructor(
		private activatedRoute: ActivatedRoute,
		private httpSvc: HttpService,
		private pageInfoSvc: PageInfoService,
		private languageSvc: LanguageService
	) {}

	ngOnInit() {
		this.currentLanguage = this.languageSvc.getCurrentLanguage();
		this.getProducts();
	}

	getProducts() {
		this.activatedRoute.params.subscribe((routeParams) => {
			let Breadcrumb = {
				en: ["Home", "Products"],
				vi: ["Trang chủ", "Sản phẩm"],
			};
			this.httpSvc
				.get(
					`assets/api/${this.currentLanguage}/product/${routeParams.productCategory}.json`
				)
				.subscribe((result) => {
					this.pageInfoSvc.setTitle(result.Data.Title);
					this.title = result.Data.Title;
					this.description = result.Data.Description;
					this.products = result.Data.Products;
					Breadcrumb[this.currentLanguage].push(result.Data.Title);
					this.breadcrumbs = Breadcrumb[this.currentLanguage];
				});
		});
	}
}
