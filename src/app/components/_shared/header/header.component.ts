import { Component, OnInit } from '@angular/core';
import { LocalizeRouterService } from '@gilsdav/ngx-translate-router';
import { TranslateService } from '@ngx-translate/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

	isSearchBoxShow = false;
	locales: Array<string>;
	currentLocale: string;

	// constructor() { }
	constructor(private localizeRouterService: LocalizeRouterService) {
		this.locales = this.localizeRouterService.parser.locales;
		this.currentLocale = this.localizeRouterService.parser.currentLang;
	}

	ngOnInit() {
	}

	toggleSearchBox() {
		this.isSearchBoxShow = !this.isSearchBoxShow;
	}

	switchLanguage(e) {
		const lang = (<HTMLInputElement>e.target).value
		this.localizeRouterService.changeLanguage(lang);
		return false;
	}
}
