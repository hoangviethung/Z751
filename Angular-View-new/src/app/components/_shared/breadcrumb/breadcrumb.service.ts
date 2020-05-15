import { Injectable } from "@angular/core";

@Injectable({
	providedIn: "root",
})
export class BreadcrumbService {
	Breadcrumb: Array<any>;
	constructor() {}

	setBreadcrumb(Breadcrumb) {
		this.Breadcrumb = Breadcrumb;
	}

	fetchBreadcrumb() {
	}
}
