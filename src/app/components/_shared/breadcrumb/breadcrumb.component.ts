import { Component, OnInit } from '@angular/core';
import { Params, Router, ActivatedRoute, NavigationEnd, PRIMARY_OUTLET } from '@angular/router';
import { filter } from 'rxjs/operators';

export interface BreadCrumb {
	label: string;
	url: string;
}

@Component({
	selector: 'app-breadcrumb',
	templateUrl: './breadcrumb.component.html',
	styleUrls: ['./breadcrumb.component.scss']
})

export class BreadcrumbComponent implements OnInit {


	public breadcrumbs: BreadCrumb[] = [];
	/**
	 * @class DetailComponent
	 * @constructor
	 */
	constructor(
		private activatedRoute: ActivatedRoute,
		private router: Router
	) {
	}

	/**
	 * Let's go!
	 *
	 * @class DetailComponent
	 * @method ngOnInit
	 */
	ngOnInit() {
		const ROUTE_DATA_BREADCRUMB = 'breadcrumb';

		// subscribe to the NavigationEnd event
		// this.router.events.pipe(
		// 	filter(event => event instanceof NavigationEnd)
		// ).subscribe(event => {
		// 	//set breadcrumbs
		// 	let root: ActivatedRoute = this.activatedRoute.root;
		// 	this.breadcrumbs = this.buildBreadCrumb(root);
		// 	console.log(this.breadcrumbs);

		// });
		// this.router.events.subscribe(event => {
		// 	if (event instanceof NavigationEnd) {
		// 		let root: ActivatedRoute = this.activatedRoute.root;
		// 		console.log(1);
		// 		this.breadcrumbs = this.buildBreadCrumb(root);
		// 	}
		// })
	}

	buildBreadCrumb(route: ActivatedRoute, url: string = '',
		               breadcrumbs: Array<BreadCrumb> = []): Array<BreadCrumb> {
		// If no routeConfig is avalailable we are on the root path
		const label = route.routeConfig ? route.routeConfig.data.breadcrumb : 'Home';
		const path = route.routeConfig ? route.routeConfig.path : '';
		// In the routeConfig the complete path is not available,
		// so we rebuild it each time
		const nextUrl = `${url}${path}/`;
		const breadcrumb = {
			label,
			url: nextUrl
		};
		const newBreadcrumbs = [...breadcrumbs, breadcrumb];
		if (route.firstChild) {
			// If we are not on our current path yet,
			// there will be more children to look after, to build our breadcumb
			return this.buildBreadCrumb(route.firstChild, nextUrl, newBreadcrumbs);
		}
		return newBreadcrumbs;
	}
}
