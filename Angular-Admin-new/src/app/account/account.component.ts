import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticateService } from '../_core/services/authenticate.service';

@Component({
	selector: 'app-account',
	templateUrl: './account.component.html',
	styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit {
	constructor(
		private router: Router,
		private authenticateSvc: AuthenticateService
	) {}

	ngOnInit(): void {
		this.checkLogin();
	}
	checkLogin() {
		const isAuthenticate = this.authenticateSvc.checkIsAuthenticate();
		if (!isAuthenticate) {
			this.router.navigateByUrl('/account/login');
		} else {
			this.router.navigateByUrl('/account/dashboard');
		}
	}
}
