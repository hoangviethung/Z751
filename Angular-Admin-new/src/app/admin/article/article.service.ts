import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class ArticleService {
	languageId = '0';
	constructor() {}

	getLaunguage() {
		return this.languageId;
	}

	setLanguage(languageId) {
		this.languageId = languageId;
	}
}
