import { Injectable } from '@angular/core';
import { LoginModel } from '../models/login.model';
import { HttpService, InputRequestOption } from './http.service';
import { CookieService } from './cookie.service';

@Injectable({
	providedIn: 'root',
})
export class AuthenticateService {
	private loginUrl: string = '/api/User/login';
	private checkUrl: string = '/api/User/check';
	private logoutUrl: string = '/api/User/logout';

	constructor(
		private httpSvc: HttpService,
		private cookieSvc: CookieService
	) {}

	public checkIsAuthenticate() {
		const option = new InputRequestOption();
		option.params = {
			token: this.cookieSvc.getToken(),
		};
		return this.httpSvc.get(this.checkUrl, option);
	}

	public login(login: LoginModel) {
		const req = new InputRequestOption();
		req.body = login;
		return this.httpSvc.post(this.loginUrl, req);
	}

	public logout() {
		return this.httpSvc.post(this.logoutUrl);
	}
}
