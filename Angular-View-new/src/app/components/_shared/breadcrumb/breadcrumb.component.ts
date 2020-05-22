import { Component, Input } from "@angular/core";

export interface Breadcrumb {
	url: string;
	title: string;
}

@Component({
	selector: "app-breadcrumb",
	templateUrl: "./breadcrumb.component.html",
	styleUrls: ["./breadcrumb.component.scss"],
})
export class BreadcrumbComponent {
	@Input() breadcrumbs: Array<Breadcrumb>;

	constructor() {}
}
