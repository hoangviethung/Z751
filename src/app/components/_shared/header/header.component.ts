import { Component, OnInit } from '@angular/core';
import { LocalizeRouterService } from '@gilsdav/ngx-translate-router';
import { TranslateService } from '@ngx-translate/core';
import { HttpService } from 'src/app/shared/services/markup.service';
import { Observable } from 'rxjs';
import { UtilsService } from 'src/app/shared/services/utils.service';

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
		private utilSvc: UtilsService
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

	switchLanguage(e) {
		const lang = (<HTMLInputElement>e.target).value
		this.localizeRouterService.changeLanguage(lang);
		return false;
	}

	fetchProductCategory() {
		this.httpSvc.get('/assets/db/vi/category-product.json').subscribe(result => {
			this.productCategory = result.data
		})
	}
}
