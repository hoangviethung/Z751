import { Component, OnInit, Input } from "@angular/core";
import { BreadcrumbService } from "./breadcrumb.service";
import { Router, NavigationEnd } from "@angular/router";
import { filter } from "rxjs/operators";

export interface Breadcrumb {
	Url: string;
	Title: string;
}

@Component({
	selector: "app-breadcrumb",
	templateUrl: "./breadcrumb.component.html",
	styleUrls: ["./breadcrumb.component.scss"],
})
export class BreadcrumbComponent implements OnInit {
	Breadcrumb;
	breadcrumbs;
	currentLanguage;

	constructor(
		private breadcrumbSvc: BreadcrumbService,
		private router: Router
	) {}

	ngOnInit() {
		this.getBreadcrumb();
		this.router.events
			.pipe(filter((e) => e instanceof NavigationEnd))
			.subscribe((e) => {
				this.getBreadcrumb();
			});
	}

	getBreadcrumb() {
		this.breadcrumbs = this.breadcrumbSvc.fetchBreadcrumb();
	}
}
