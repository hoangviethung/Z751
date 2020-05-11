import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { RoutingService } from '../../services/routing.service';
import { Title } from '@angular/platform-browser';

@Component({
	selector: 'app-breadcrumb',
	templateUrl: './breadcrumb.component.html',
	styleUrls: ['./breadcrumb.component.scss'],
})
export class BreadcrumbComponent implements OnInit {
	public breadcrumbs;

	private subscription: Subscription;

	homeIcon = 'lnr lnr-home';

	constructor(
		private routingService: RoutingService,
		private titleSvc: Title
	) {}

	/**
	 * @method ngOnInit
	 */
	ngOnInit(): void {
		this.subscription = this.routingService.onChange.subscribe((value) => {
			this.breadcrumbs = value;
			console.log(this.breadcrumbs);

			this.titleSvc.setTitle(
				this.breadcrumbs[this.breadcrumbs.length - 1].data.title
			);
		});
	}

	/**
	 * @method ngOnDestroy
	 */
	ngOnDestroy() {
		this.subscription.unsubscribe();
	}
}
