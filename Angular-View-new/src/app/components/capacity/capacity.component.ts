import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HttpService, InputRequestOption } from "src/core/services/http.service";
import { PageInfoService } from "src/core/services/page-info.service";
import { LanguageService } from "src/core/services/language.service";
import { ProductModel } from "src/core/models/Product.model";
import { API } from "src/core/configs/api";
import { response } from 'express';
import { map } from 'rxjs/operators';

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
		private activatedRoute: ActivatedRoute,
		private httpSvc: HttpService,
		private pageInfoSvc: PageInfoService,
		private languageSvc: LanguageService
	) { }

	ngOnInit() {
		this.getCapacities();
	}

	getCapacities() {
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
