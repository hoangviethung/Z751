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
	constructor(
		private authenticateSvc: AuthenticateService,
		private cookieSvc: CookieService,
		private router: Router,
		private roleBasedSvc: RoleBasedService,
		private crudSvc: CrudService
	) {}

	ngOnInit(): void {
		this.getUserFeatures();
	}

	toggleInfoDetail() {
		this.isDetailInfoShow = !this.isDetailInfoShow;
	}

	logout() {
		this.authenticateSvc.logout().subscribe((response) => {});
		this.cookieSvc.delete('user');
		this.router.navigateByUrl('/account/login');
	}

	getUserFeatures() {
		const userRole = this.roleBasedSvc.getUserRole();
		userRole.forEach((role) => {
			const opts = new InputRequestOption();
			opts.params = {
				name: role,
			};
			this.crudSvc
				.get(APIConfig.Role.GetPermissions, opts)
				.subscribe((response) => {
					const featuresObjects = this.roleBasedSvc.getUserFeaturesCanDo(
						response.data.features
					);
					this.cookieSvc.set(
						'user-features',
						JSON.stringify(featuresObjects)
					);
				});
		});
	}
}
