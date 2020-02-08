import { Component, OnInit } from '@angular/core';
import { LocalizeRouterService } from '@gilsdav/ngx-translate-router';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/shared/services/http.service';

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
		private localizeRouterService: LocalizeRouterService,
		private httpSvc: HttpService,
	) {
		this.locales = this.localizeRouterService.parser.locales;
		this.currentLocale = this.localizeRouterService.parser.currentLang;
	}

	ngOnInit() {
		this.fetchProductCategory();
	}

	toggleSearchBox() {
		this.isSearchBoxShow = !this.isSearchBoxShow;
	}

	switchLanguage(e: Event) {
		const lang = (<HTMLInputElement>e.target).value
		this.localizeRouterService.changeLanguage(lang);
		return false;
	}

	fetchProductCategory() {
		const headerProductCategory: Observable<any> = this.httpSvc.get('assets/db/vi/category-product.json');
		headerProductCategory.subscribe(result => {
			this.productCategory = result.data
		})
	}
}
