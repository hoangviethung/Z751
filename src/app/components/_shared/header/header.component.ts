import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/shared/services/http.service';
import { LanguageService } from 'src/app/shared/services/language.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

	isSearchBoxShow = false;
	locales: Array<string>;
	currentLocale: string;
	productCategory;

	constructor(
		private httpSvc: HttpService,
		private languageSvc: LanguageService
	) {
		this.locales = this.languageSvc.fetchLocales();
		this.currentLocale = this.languageSvc.getCurrentLanguage();
	}

	ngOnInit() {
		this.fetchProductCategory();
	}

	toggleSearchBox() {
		this.isSearchBoxShow = !this.isSearchBoxShow;
	}

	switchLanguage(e: Event) {
		const lang = (<HTMLInputElement>e.target).value
		this.languageSvc.changeLanguage(lang);
		return false;
	}

	fetchProductCategory() {
		this.httpSvc.get(`assets/db/${this.currentLocale}/category-product.json`)
			.subscribe(result => {
				this.productCategory = result.data
			})

		this.languageSvc.getCurrentLanguageWhenChangeLanguage().subscribe(lang => {
			this.currentLocale = lang;
			this.httpSvc.get(`assets/db/${lang}/category-product.json`)
				.subscribe(result => {
					this.productCategory = result.data
				})
		})
	}
}
