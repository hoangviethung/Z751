import { Component, OnInit } from "@angular/core";
import {
	HttpService,
	InputRequestOption,
} from "../../../../core/services/http.service";
import { Category } from "../../../../core/models/Category.model";
import { HttpParams } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { map } from "rxjs/operators";
import { API } from "src/core/configs/api";
import { LanguageModel } from "src/core/models/Language.model";

@Component({
	selector: "app-header",
	templateUrl: "./header.component.html",
	styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
	isSearchBoxShow = false;
	languages: Array<LanguageModel>;
	newsCategories: Array<Category>;
	productCategories: Array<Category>;
	capacityCategories: Array<Category>;
	departmentCategories: Array<Category>;
	currentLanguage: string;
	menus: any;

	constructor(private httpSvc: HttpService) {}

	ngOnInit() {
		this.getLanguages();
		this.getMenus();
		// this.getProductCategories();
		// this.getDepartmentCategories();
		// this.getCapacityCategories();
		// this.getNewsCategories();
	}

	toggleSearchBox() {
		this.isSearchBoxShow = !this.isSearchBoxShow;
	}

	switchLanguage(e: Event) {
		const lang = (<HTMLInputElement>e.target).value;
		this.httpSvc
			.post(API.Language.switch + "?key=" + lang)
			.subscribe(() => {
				if (lang == "en") {
					document.location.href = "/en";
				}
				if (lang == "vi") {
					document.location.href = "/";
				}
			});
	}

	getLanguages() {
		this.httpSvc
			.get(environment.remoteBaseUrl + API.Language.get)
			.pipe(
				map((response) => {
					console.log({ key: response });
					return { key: response };
				})
			)
			.subscribe((res) => {
				console.log(res);
			});
		this.httpSvc.get(API.Language.gets).subscribe((response) => {
			this.languages = response.data;
		});
	}

	getProductCategories() {
		const opts = new InputRequestOption();
		opts.params = {
			language: "1",
		};
		this.httpSvc
			.get("/api/Category/used/gets", opts)
			.subscribe((result) => {
				console.log(result);
				this.productCategories = result.data;
			});
	}

	getNewsCategories() {
		this.httpSvc.get(`/api/Category/used/get`).subscribe((result) => {
			this.newsCategories = result.data;
		});
	}

	getDepartmentCategories() {
		this.httpSvc.get(`/api/Category/used/get`).subscribe((result) => {
			this.departmentCategories = result.data;
		});
	}

	getCapacityCategories() {
		this.httpSvc.get(`/api/Category/used/get`).subscribe((result) => {
			this.capacityCategories = result.data;
		});
	}
	getMenus() {
		const opts = new InputRequestOption();
		opts.params = {
			type: "0",
		};
		this.httpSvc
			.get("/api/Menu/used/get", opts)
			.pipe(
				map((response) => {
					const newMenus = response.data.map((item) => {
						let newItem = item;
						if (newItem.parentId == null) {
							newItem.parentId = -99;
						}
						return newItem;
					});
					return newMenus;
				})
			)
			.subscribe((response) => {
				console.log(response);

				this.menus = response;
			});
	}
}
