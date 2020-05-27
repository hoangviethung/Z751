import { Component, OnInit, Inject, PLATFORM_ID } from "@angular/core";
import {
	HttpService,
	InputRequestOption,
} from "../../../../core/services/http.service";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { map } from "rxjs/operators";
import { LanguageModel } from "src/core/models/Language.model";
import { DOCUMENT, isPlatformBrowser } from "@angular/common";
import { Router } from "@angular/router";
import { LanguageService } from "src/core/services/language.service";
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
	keywords: string;

	constructor(
		private httpSvc: HttpService,
		private router: Router,
		private langSvc: LanguageService,
		@Inject(PLATFORM_ID) private platform,
		@Inject(DOCUMENT) private document: Document
	) {}

	ngOnInit() {
		this.getLanguages();
		this.getMenus();
	}

	switchLanguage(e: Event) {
		const lang = (<HTMLInputElement>e.target).value;
		this.languages.forEach((item: LanguageModel) => {
			if (item.key == lang) {
				item.isDefault = true;
			} else {
				item.isDefault = false;
			}
			if (isPlatformBrowser(this.platform)) {
				localStorage.setItem(
					"languages",
					JSON.stringify(this.languages)
				);
				this.langSvc.setLanguages(this.languages);
				this.languages.find((item) => {
					if (item.isDefault) {
						this.langSvc.setCurrentLanguage(item.key);
					}
				});
			} else {
				this.langSvc.setLanguages(this.languages);
				this.languages.find((item) => {
					if (item.isDefault) {
						this.langSvc.setCurrentLanguage(item.key);
					}
				});
			}
			this.document.location.href = "/";
		});
	}

	toggleSearchBox() {
		this.isSearchBoxShow = !this.isSearchBoxShow;
	}

	getLanguages() {
		if (isPlatformBrowser(this.platform)) {
			if (localStorage.getItem("languages")) {
				this.languages = JSON.parse(localStorage.getItem("languages"));
			} else {
				this.langSvc.getLanguages().subscribe((response) => {
					this.languages = response.data.map(
						(item: LanguageModel) => {
							if (item.key == "vi") {
								item.image = "./assets/images/vi.png";
							}
							if (item.key == "en") {
								item.image = "./assets/images/en.png";
							}
							if (item.isDefault) {
								this.langSvc.setCurrentLanguage(item.key);
							}
							return item;
						}
					);

					localStorage.setItem(
						"languages",
						JSON.stringify(this.languages)
					);
				});
			}
		} else {
			this.langSvc.getLanguages().subscribe((response) => {
				this.languages = response.data.map((item: LanguageModel) => {
					if (item.key == "vi") {
						item.image = "./assets/images/vi.png";
					}
					if (item.key == "en") {
						item.image = "./assets/images/en.png";
					}
					if (item.isDefault) {
						this.langSvc.setCurrentLanguage(item.key);
					}
					return item;
				});
			});
		}
	}

	getMenus() {
		const opts = new InputRequestOption();
		opts.params = {
			type: this.langSvc.currentLanguage,
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
				console.log(this.menus);
			});
	}

	search() {
		this.router.navigate(["/search"], {
			queryParams: {
				keywords: this.keywords,
			},
		});
		this.isSearchBoxShow = false;
	}
}
