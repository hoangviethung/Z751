import { Component, OnInit } from '@angular/core';
import { LoginModel } from 'src/app/_core/models/login.model';
import { AuthenticateService } from 'src/app/_core/services/authenticate.service';
import { CookieService } from 'src/app/_core/services/cookie.service';
import { Router } from '@angular/router';

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
	constructor(
		private authenticateSvc: AuthenticateService,
		private cookieSvc: CookieService,
		private router: Router
	) {}

	ngOnInit(): void {}

	login() {
		this.authenticateSvc
			.login(this.loginInfo)
			.subscribe((response: any) => {
				if (response.code == 200) {
					this.cookieSvc.set('user', JSON.stringify(response.data));
					this.router.navigateByUrl('/admin/dashboard');
				}
				if (response.code == 400) {
					console.log('Tài khoản không tồn tại');
				}
			});
	}
}
