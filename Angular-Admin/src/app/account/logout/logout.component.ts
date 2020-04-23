import { Component, OnInit, Injector } from '@angular/core'
import { Router } from '@angular/router'
import { AuthenticService } from '../../core/authentication/authentic.service'
import { UrlConsts } from '../../core/constant/AppConsts'
import { BaseComponent } from '../../core/basecommon/base.component'

@Component({
	selector: 'logout',
	templateUrl: './logout.component.html',
})
export class LogoutComponent extends BaseComponent {
	constructor(
		injector: Injector,
		private router: Router,
		private authenticSvc: AuthenticService
	) {
		super(injector)
		if (authenticSvc.isAuthenticated()) {
			this.authenticSvc.logout(() => {
				this.router.navigate([UrlConsts.urlLogin])
			})
		} else {
			this.router.navigate([UrlConsts.urlLogin])
		}
	}

	ngOnInit() {}
}
