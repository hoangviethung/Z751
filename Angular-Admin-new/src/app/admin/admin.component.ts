import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../_core/services/authenticate.service';
import { CookieService } from '../_core/services/cookie.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-admin',
	templateUrl: './admin.component.html',
	styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
	isDetailInfoShow: boolean = false;
	constructor(
		private authenticateSvc: AuthenticateService,
		private cookieSvc: CookieService,
		private router: Router
	) {}

	ngOnInit(): void {}

	toggleInfoDetail() {
		this.isDetailInfoShow = !this.isDetailInfoShow;
	}
	logout() {
		this.authenticateSvc.logout().subscribe((response) => {});
		this.cookieSvc.delete('user');
		this.router.navigateByUrl('/account/login');
	}
}
