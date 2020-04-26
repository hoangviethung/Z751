import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { AuthenticService } from 'src/core/authentication/authentic.service'
import { ApiConfig } from 'src/app/api-config'

class RequestOption {
	body?: any
	headers?:
		| HttpHeaders
		| {
				[header: string]: string | string[]
		  }
	observe?: any
	params?:
		| HttpParams
		| {
				[param: string]: string | string[]
		  }
	reportProgress?: boolean
	responseType: any
	withCredentials?: boolean
}
@Injectable({
	providedIn: 'root',
})
export class BannerService {
	constructor(
		private http: HttpClient,
		private authenticateSvc: AuthenticService
	) {}

	test(banner: any) {
		let authHeaders = new HttpHeaders()
		authHeaders = authHeaders
			.set('Content-Type', 'application/json-patch+json')
			.set('Data-Type', 'application/json')
			.set('Accept', 'text/plain')
			.set('Accept-Language', 'vi')
			.set(
				'Authorization',
				'bearer ' + this.authenticateSvc.getAccessToken()
			)
			.set('locale', 'vi')

		const option = new RequestOption()
		option.observe = 'body'
		option.responseType = 'json'
		option.body = banner
		option.headers = authHeaders
		console.log(ApiConfig.banner.add)
		return this.http
			.post(ApiConfig.banner.add, banner, option)
	}
}
