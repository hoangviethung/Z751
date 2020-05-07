import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { RoutingService } from '../../services/routing.service';

@Component({
	selector: 'app-breadcrumb',
	templateUrl: './breadcrumb.component.html',
	styleUrls: ['./breadcrumb.component.scss'],
})
export class BreadcrumbComponent implements OnInit {
	public breadcrumbs;

	private subscription: Subscription;

	homeIcon = 'lnr lnr-home';

	constructor(private routingService: RoutingService) {}

	/**
	 * @method ngOnInit
	 */
	ngOnInit(): void {
		this.subscription = this.routingService.onChange.subscribe((value) => {
			this.breadcrumbs = value;
		});
	}

	/**
	 * @method ngOnDestroy
	 */
	ngOnDestroy() {
		this.subscription.unsubscribe();
	}
}
