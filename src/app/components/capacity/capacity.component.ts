import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HttpService } from "src/app/services/http.service";
import { PageInfoService } from "src/app/services/page-info.service";
import { LanguageService } from "src/app/services/language.service";
import { Product } from "src/app/models/core/Product.model";

@Component({
	selector: "app-capacity",
	templateUrl: "./capacity.component.html",
	styleUrls: ["./capacity.component.scss"],
})
export class CapacityComponent implements OnInit {
	currentLanguage: string;
	capacities: Array<Product> = [];
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
	) {}

	ngOnInit() {
		this.currentLanguage = this.languageSvc.getCurrentLanguage();
		this.getCapacities();
	}

	getCapacities() {
		this.activatedRoute.params.subscribe((routeParams) => {
			let Breadcrumb = {
				en: ["Home", "Capacities"],
				vi: ["Trang chủ", "Năng lực"],
			};
			this.httpSvc
				.get(
					`assets/api/${this.currentLanguage}/capacity/${routeParams.capacityCategory}.json`
				)
				.subscribe((result) => {
					this.pageInfoSvc.setTitle(result.Data.Title);
					this.title = result.Data.Title;
					this.capacities = result.Data.Products;
					Breadcrumb[this.currentLanguage].push(result.Data.Title);
					this.breadcrumbs = Breadcrumb[this.currentLanguage];
				});
		});
	}
}
