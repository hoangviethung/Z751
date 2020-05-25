import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../_core/services/authenticate.service';
import { CookieService } from '../_core/services/cookie.service';
import { Router } from '@angular/router';
import { RoleBasedService } from '../_core/services/role-based.service';
import { CrudService } from '../_core/services/crud.service';
import { APIConfig } from '../_core/API-config';
import { InputRequestOption } from '../_core/services/http.service';

@Component({
	selector: 'app-admin',
	templateUrl: './admin.component.html',
	styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
	isDetailInfoShow: boolean = false;
	isShowUpload: boolean;
	constructor(
		private authenticateSvc: AuthenticateService,
		private cookieSvc: CookieService,
		private router: Router,
		private roleBasedSvc: RoleBasedService
	) {}

	ngOnInit(): void {}

	toggleInfoDetail() {
		this.isDetailInfoShow = !this.isDetailInfoShow;
	}

	logout() {
		this.authenticateSvc.logout().subscribe((response) => {
			if (response.code == 200) {
				this.cookieSvc.delete('user');
				this.cookieSvc.delete('user-features');
				this.router.navigateByUrl('/account/login');
			}
		});
	}
}
