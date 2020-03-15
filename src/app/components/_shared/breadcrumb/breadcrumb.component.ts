import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from './breadcrumb.service';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { filter } from 'rxjs/operators';

export interface BreadCrumb {
	url: string;
	label: string;
}

@Component({
	selector: 'app-breadcrumb',
	templateUrl: './breadcrumb.component.html',
	styleUrls: ['./breadcrumb.component.scss']
})

export class BreadcrumbComponent implements OnInit {

	breadcrumbs;

	constructor(
		private brcSvc: BreadcrumbService,
		private router: Router
	) {
	}

	ngOnInit() {
		this.fetchBreadcrumb();
		this.router.events
			.pipe(filter(e => e instanceof NavigationEnd))
			.subscribe(e => {
				this.fetchBreadcrumb();
			})
	}

	fetchBreadcrumb() {
		this.breadcrumbs = this.brcSvc.getBreadcrumb();
	}
}
