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
	languages;
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
		this.languages = this.languageSvc.fetchLanguages().map((language) => {
			if (language == "vi") {
				return {
					value: language,
					title: "Việt Nam",
					image: "./assets/images/vi.png",
				};
			}
			if (language == "en") {
				return {
					value: language,
					title: "English",
					image: "./assets/images/en.png",
				};
			}
		});
	}

	getProductCategories() {
		this.httpSvc
			.get(
				`/api/Category/used/get`
			)
			.subscribe((result) => {
				console.log(result);
				this.productCategories = result.data;
			});
	}

	getNewsCategories() {
		this.httpSvc
			.get(`/api/Category/used/get`)
			.subscribe((result) => {
				this.newsCategories = result.data;
			});
	}

	getDepartmentCategories() {
		this.httpSvc
			.get(
				`/api/Category/used/get`
			)
			.subscribe((result) => {
				this.departmentCategories = result.data;
			});
	}

	getCapacityCategories() {
		this.httpSvc
			.get(
				`/api/Category/used/get`
			)
			.subscribe((result) => {
				this.capacityCategories = result.data;
			});
	}
}
