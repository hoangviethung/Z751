import { Component, OnInit } from '@angular/core';
import { LoginModel } from 'src/app/_core/models/login.model';
import { AuthenticateService } from 'src/app/_core/services/authenticate.service';
import { CookieService } from 'src/app/_core/services/cookie.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ResponseModel } from 'src/app/_core/models/response.model';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
	loginInfo = new LoginModel({
		userName: '',
		password: '',
		isRememberMe: false,
	});

	errorAlert: string;

	constructor(
		private authenticateSvc: AuthenticateService,
		private cookieSvc: CookieService,
		private router: Router,
		private toastrSvc: ToastrService
	) {}

	ngOnInit(): void {}

	login(event?) {
		this.authenticateSvc
			.login(this.loginInfo)
			.subscribe((response: ResponseModel) => {
				if (response.code == 200) {

					// Group Feature to shortly permission that is written on cookie.
					// Note: Size limit of all cookies is 4048B
					response.data.permissions = this.groupFeature(response.data.permissions);

					this.cookieSvc.set('user', JSON.stringify(response.data));
					this.toastrSvc.success(response.message);
					this.router.navigateByUrl('/admin/dashboard');
				}
				if (response.code == 400) {
					this.errorAlert = response.message;
					this.toastrSvc.error(response.message);
				}
			});
	}

	groupFeature(features: any[])
	{
		const result = [];

		if (Array.isArray(features))
		{
			features.forEach((feature) => {
				let resultData = result.find((d) => d.name === feature.name);
				if (!resultData)
				{
					resultData = feature;
					resultData.permissions = [];
					result.push(feature);
				}
				resultData.permissions.push(feature.permission);
				delete feature.permission;
			});
		}

		return result;
	}
}
