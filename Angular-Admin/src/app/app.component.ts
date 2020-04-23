import { Component } from '@angular/core'
import { AuthenticService } from './core/authentication/authentic.service'
import { Router } from '@angular/router'

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	title = 'AdminAngular'
	constructor(
		private authenticSvc: AuthenticService,
		private routeSvc: Router
	) {
		if (
			!this.authenticSvc.getAccessToken() &&
			(window.location.pathname === '/' ||
				window.location.pathname.startsWith('/admin'))
		) {
			this.routeSvc.navigateByUrl('/auth/login')
		}
	}
}
