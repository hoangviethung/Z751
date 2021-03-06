import { Component, OnInit, Inject, PLATFORM_ID } from "@angular/core";
import {
	HttpService,
	InputRequestOption,
} from "../../../../core/services/http.service";
import { map } from "rxjs/operators";
import { LanguageModel } from "src/core/models/Language.model";
import { DOCUMENT, isPlatformBrowser } from "@angular/common";
import { Router } from "@angular/router";
import { LanguageService } from "src/core/services/language.service";
import { HeaderService } from './header.service';
import { MenuModel } from 'src/core/models/Menu.model';

@Component({
	selector: "app-header",
	templateUrl: "./header.component.html",
	styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
	isSearchBoxShow = false;
	languages: Array<LanguageModel>;
	currentLanguage: string;
	menus: Array<MenuModel> = [];
	keywords: string;
	defaultImage = "https://i1.wp.com/www.uminahairandbeauty.com.au/wp-content/uploads/2018/08/background-wallpaper-noisy-gray-light-and-white-color-small-random-spots-texture.jpg?fit=256%2C256&ssl=1";
	constructor(
		private httpSvc: HttpService,
		private router: Router,
		private langSvc: LanguageService,
		private headerSvc: HeaderService,
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

					let newMenus = response.data.map((item) => {
						let newItem = item;
						if (newItem.parentId == null) {
							newItem.parentId = -99;
						}
						return newItem;
					});
					let menuList = this.headerSvc.getMenu(newMenus)
					
					return menuList;
				})
			)
			.subscribe((response) => {
				this.menus = response;
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
