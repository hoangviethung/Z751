import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

import { Observable } from 'rxjs'

import { LoginModel } from './login.model'
import {
	AuthenticService,
	Session,
} from '../../core/authentication/authentic.service'
import { ResultModel } from '../../core/models/http.model'
import { AppConsts } from '../../core/constant/AppConsts'

@Injectable({
	providedIn: 'root',
})
export class LoginService {
	private urlLogin: string = '/api/Authen/login'
	constructor(
		private http: HttpClient,
		private authenticSvc: AuthenticService
	) {}

	login(model: LoginModel): Observable<ResultModel<Session>> {
		return this.http.post<ResultModel<Session>>(
			`${AppConsts.remoteServiceBaseUrl}${this.urlLogin}`,
			model,
			this.authenticSvc.getHttpHeader()
		)
	}
}
