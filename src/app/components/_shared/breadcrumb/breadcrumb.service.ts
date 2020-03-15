import { Injectable } from '@angular/core';
import { LanguageService } from 'src/app/shared/services/language.service';

@Injectable({
	providedIn: 'root'
})
export class BreadcrumbService {
	breadcrumbs;

	constructor(
		private languageSvc: LanguageService
	) {
	}

	setBreadcrumb(breadcrumbObj) {
		this.breadcrumbs = breadcrumbObj[this.languageSvc.getCurrentLanguage()];
	}

	getBreadcrumb() {
		return this.breadcrumbs;
	}
}
