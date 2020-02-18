import { Injectable } from '@angular/core';
import { LocalizeRouterService } from '@gilsdav/ngx-translate-router';

@Injectable({
	providedIn: 'root'
})
export class LanguageService {

	constructor(
		private localize: LocalizeRouterService
	) { }

	fetchLocales() {
		return this.localize.parser.locales;
	}

	changeLanguage(lang) {
		this.localize.changeLanguage(lang);
	}

	getCurrentLanguageWhenChangeLanguage() {
		return this.localize.routerEvents
	}

	getCurrentLanguage() {
		return this.localize.parser.currentLang;
	}
}
