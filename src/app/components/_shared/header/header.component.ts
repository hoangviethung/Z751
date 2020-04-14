import { Component, OnInit } from "@angular/core";
import { HttpService } from "src/app/services/http.service";
import { LanguageService } from "src/app/services/language.service";
import { Category } from "src/app/models/core/Category.model";

@Component({
	selector: "app-header",
	templateUrl: "./header.component.html",
	styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
	isSearchBoxShow = false;
	languages: Array<string>;
	newsCategories: Array<Category>;
	productCategories: Array<Category>;
	capacityCategories: Array<Category>;
	departmentCategories: Array<Category>;
	currentLanguage: string;

	constructor(
		private httpSvc: HttpService,
		private languageSvc: LanguageService
	) {
		this.currentLanguage = this.languageSvc.getCurrentLanguage();
	}

	ngOnInit() {
		this.getLanguages();
		this.getProductCategories();
		this.getDepartmentCategories();
		this.getCapacityCategories();
		this.getNewsCategories();
	}

	toggleSearchBox() {
		this.isSearchBoxShow = !this.isSearchBoxShow;
	}

	switchLanguage(e: Event) {
		const lang = (<HTMLInputElement>e.target).value;
		if (lang == "en") {
			window.location.href = "/en";
		} else {
			window.location.href = "/";
		}
	}

	getLanguages() {
		this.languages = this.languageSvc.fetchLanguages();
	}

	getProductCategories() {
		this.httpSvc
			.get(
				`assets/api/${this.currentLanguage}/product/categories-product.json`
			)
			.subscribe((result) => {
				this.productCategories = result.Data;
			});
	}

	getNewsCategories() {
		this.httpSvc
			.get(`assets/api/${this.currentLanguage}/news/categories-news.json`)
			.subscribe((result) => {
				this.newsCategories = result.Data;
			});
	}

	getDepartmentCategories() {
		this.httpSvc
			.get(
				`assets/api/${this.currentLanguage}/department/categories-department.json`
			)
			.subscribe((result) => {
				this.departmentCategories = result.Data;
			});
	}

	getCapacityCategories() {
		this.httpSvc
			.get(
				`assets/api/${this.currentLanguage}/capacity/categories-capacity.json`
			)
			.subscribe((result) => {
				this.capacityCategories = result.Data;
			});
	}
}
