import { Injectable } from "@angular/core";
import { LanguageService } from "src/app/services/language.service";

@Injectable({
	providedIn: "root",
})
export class BreadcrumbService {
	Breadcrumb: Array<any>;
	constructor(private languageSvc: LanguageService) {}

	setBreadcrumb(Breadcrumb) {
		this.Breadcrumb = Breadcrumb;
	}

	fetchBreadcrumb() {
		return this.Breadcrumb[this.languageSvc.getCurrentLanguage()];
	}
}
