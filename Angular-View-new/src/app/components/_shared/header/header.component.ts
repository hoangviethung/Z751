import { Component, OnInit, Inject } from "@angular/core";
import {
	HttpService,
	InputRequestOption,
} from "../../../../core/services/http.service";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { map } from "rxjs/operators";
import { API } from "src/core/configs/api";
import { LanguageModel } from "src/core/models/Language.model";
import { DOCUMENT } from "@angular/common";
import { TranslateService } from "@ngx-translate/core";

@Component({
	selector: "app-header",
	templateUrl: "./header.component.html",
	styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
	isSearchBoxShow = false;
	languages: Array<LanguageModel>;
	currentLanguage: string;
	menus: any;

	constructor(
		private httpSvc: HttpService,
		private http: HttpClient,
		private httpClientSvc: HttpClient,
		@Inject(DOCUMENT) private document: Document
	) {
	}

	ngOnInit() {
		this.getLanguages();
		this.getMenus();
		this.getcurrentLanguage();
	}

	toggleSearchBox() {
		this.isSearchBoxShow = !this.isSearchBoxShow;
	}

	switchLanguage(e: Event) {
		const opts = new InputRequestOption();
		const lang = (<HTMLInputElement>e.target).value;
		opts.params = {
			key: lang,
		};
		this.httpSvc.post(API.Language.switch, opts).subscribe((res) => {
			this.document.location.reload();
		});
	}

	getLanguages() {
		this.httpSvc
			.get(API.Language.gets)
			.pipe(
				map((response) => {
					return response.data;
				})
			)
			.subscribe((languages) => {
				this.languages = languages;
				this.languages.forEach((item) => {
					if (item.key == "vi") {
						item.image = "./assets/images/vi.png";
					} else {
						item.image = "./assets/images/en.png";
					}
				});
			});
	}

	getcurrentLanguage() {
		this.httpClientSvc
			.get(environment.remoteBaseUrl + API.Language.get, {
				responseType: "text",
			})
			.subscribe((key) => {
				this.currentLanguage = key;
			});
	}

	getMenus() {
		this.http
			.get(`${environment.remoteBaseUrl}/api/Language/get`, {
				responseType: "text",
			})
			.subscribe((lang) => {
				const opts = new InputRequestOption();
				opts.params = {
					type: lang == "vi" ? "0" : "1",
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
						this.menus = response;
					});
			});
	}
}
