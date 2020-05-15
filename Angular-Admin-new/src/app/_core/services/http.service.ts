import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { CookieService } from './cookie.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { APPConfig } from '../APP-config';
import { Router } from '@angular/router';

export class RequestOption {
	body?: any;
	params?: HttpParams | { [param: string]: string | string[] };
	headers?: HttpHeaders | { [header: string]: string | string[] };
	observe?: 'body';
	reportProgress?: boolean;
	responseType: any;
	withCredentials?: boolean;
}

export class InputRequestOption {
	body?: any;
	params?: HttpParams | { [param: string]: string | string[] };
}

@Injectable({
	providedIn: 'root',
})
export class HttpService {
	constructor(
		private http: HttpClient,
		private cookieSvc: CookieService,
		private router: Router
	) {}
	private TOKEN: string;

	get(url: string, options?: InputRequestOption): Observable<any> {
		const option = this.getDefautRequestOptions(options);
		return this.request('GET', url, option);
	}

	post(url: string, options?: InputRequestOption): Observable<any> {
		const option = this.getDefautRequestOptions(options);
		return this.request('POST', url, option);
	}

	private getDefautRequestOptions(options?: InputRequestOption) {
		const option = new RequestOption();
		option.headers = this.getDefaultHeaders();
		option.observe = 'body';
		option.responseType = 'json';
		if (options) {
			option.params = options.params;
			option.body = options.body;
		}
		return option;
	}

	private request(method: string, url: string, option: RequestOption) {
		const fullUrl = APPConfig.remoteServerUrl + url;
		return this.http.request(method, fullUrl, option).pipe(
			map((response: any) => {
				if (response.code != 200) {
					console.log(response.code, response.message);
				}
				if (response.code == 403) {
					this.cookieSvc.deleteAll();
					this.router.navigate(['/account/login']);
				}
				return response;
			})
		);
	}

	private getDefaultHeaders(): HttpHeaders {
		return new HttpHeaders({
			'Content-Type': 'application/json-patch+json',
			Accept: 'application/json',
			'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, DELETE, PUT',
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Headers':
				'X-Requested-With, Content-Type, Origin, Authorization, Accept, Client-Security-Token, Accept-Encoding',
			Authorization: `Bearer ${this.cookieSvc.getToken()}`,
		});
	}
}
