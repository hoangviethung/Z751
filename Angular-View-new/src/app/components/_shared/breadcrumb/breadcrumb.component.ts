import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";

export interface Breadcrumb {
	Url: string;
	Title: string;
}

@Component({
	selector: "app-breadcrumb",
	templateUrl: "./breadcrumb.component.html",
	styleUrls: ["./breadcrumb.component.scss"],
})
export class BreadcrumbComponent {
	@Input("breadcrumbs") breadcrumbs = [];

	constructor(private router: Router) {}

	navigate(url) {
		this.router.navigate([url]);
	}
}
