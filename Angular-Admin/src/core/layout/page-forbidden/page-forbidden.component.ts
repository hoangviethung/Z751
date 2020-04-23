import { Component, Injector } from '@angular/core'
import { AppBaseComponent } from 'src/core/basecommon/app-base.component'

@Component({
	selector: 'app-page-forbidden',
	templateUrl: './page-forbidden.component.html',
	styleUrls: ['./page-forbidden.component.scss'],
})
export class PageForbiddenComponent extends AppBaseComponent {
	constructor(injector: Injector) {
		super(injector)
	}

	ngOnInit() {}
}
