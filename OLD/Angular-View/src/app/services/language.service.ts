import { Injectable } from '@angular/core';
import { LocalizeRouterService } from '@gilsdav/ngx-translate-router';

@Injectable({
	providedIn: 'root'
})
export class LanguageService {

	constructor(
		private localize: LocalizeRouterService
	) { }

	fetchLanguages() {
		return this.localize.parser.locales;
	}

	getCurrentLanguage() {
		return this.localize.parser.currentLang;
	}
}
