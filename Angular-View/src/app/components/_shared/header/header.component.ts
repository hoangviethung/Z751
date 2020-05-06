import { Component, OnInit, Inject } from "@angular/core";
import { HttpService } from "src/app/services/http.service";
import { LanguageService } from "src/app/services/language.service";
import { Category } from "src/app/models/core/Category.model";
import { HttpParams, HttpClient } from '@angular/common/http';
import { ApiConfigModel } from 'src/app/models/common/api-config.model';
import { LanguageModel } from 'src/app/models/core/Language.model';
import { ImagesLanguages } from 'src/app/shared/enum/ImagesLanguageEnums';
import { DOCUMENT } from '@angular/common';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { response } from 'express';

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

	constructor(
		private httpSvc: HttpService,
		private languageSvc: LanguageService,
		private http: HttpClient,
		@Inject(DOCUMENT) document: Document
	) {
		this.currentLanguage = this.languageSvc.getCurrentLanguage();
	}

	ngOnInit() {
		this.getLanguages();
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
		console.log(lang);
		this.httpSvc.post(ApiConfigModel.language.switch + '?key=' + lang)
			.subscribe(() => {
				if (lang == 'en') {
					document.location.href = '/en'
				}
				if (lang == 'vi') {
					document.location.href = '/'
				}
			})
	}

	getLanguages() {
		this.http.get(environment.remoteBaseUrl + ApiConfigModel.language.get)
			.pipe(map(response => {
				console.log({ key: response });

				return { key: response }
			}))
			.subscribe(res => {
				console.log(res);
			})
		this.httpSvc
			.get(ApiConfigModel.language.gets)
			.subscribe((response) => {
				this.languages = response.data;
				this.languages.forEach((item, index) => {
					item.image = ImagesLanguages[index].path;
				})
				console.log(this.languages);
			})
	}

	getProductCategories() {
		const params = new HttpParams()
		params.set('language', '1')
		this.httpSvc
			.get('/api/Category/used/gets', params)
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
