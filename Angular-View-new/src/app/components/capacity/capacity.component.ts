import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HttpService, InputRequestOption } from "src/core/services/http.service";
import { PageInfoService } from "src/core/services/page-info.service";
import { LanguageService } from "src/core/services/language.service";
import { ProductModel } from "src/core/models/Product.model";
import { API } from "src/core/configs/api";

@Component({
	selector: "app-capacity",
	templateUrl: "./capacity.component.html",
	styleUrls: ["./capacity.component.scss"],
})
export class CapacityComponent implements OnInit {
	currentLanguage: string;
	capacities: Array<ProductModel> = [];
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
		this.getCapacities();
	}

	getCapacities() {
		this.activatedRoute.params.subscribe((routeParams) => {
			let Breadcrumb = {
				en: ["Home", "Capacities"],
				vi: ["Trang chủ", "Năng lực"],
			};
			const opts = new InputRequestOption();
			opts.params = {
				url: "%2Fnang-luc",
			};
			this.httpSvc.get(API.ProductGroup.Gets, opts)
				.subscribe((result) => {
					console.log(result);
				});
		});
	}
}
