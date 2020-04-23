import { Component, OnInit, Injector } from '@angular/core'
import { AppBaseComponent } from 'src/app/core/basecommon/app-base.component'

@Component({
	selector: 'dashboard',
	templateUrl: 'dashboard.component.html',
	styleUrls: ['dashboard.component.scss'],
})
export class DashboardComponent extends AppBaseComponent {
	constructor(injector: Injector) {
		super(injector)
	}

	ngOnInit() {}
}
