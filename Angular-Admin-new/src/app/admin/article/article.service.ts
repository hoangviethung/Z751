import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class ArticleService {
	languageId = '1';
	constructor() {}

	getLaunguage() {
		return this.languageId;
	}

	setLanguage(languageId) {
		this.languageId = languageId;
	}
}
