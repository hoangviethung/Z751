import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { Router } from "@angular/router";
import { ROUTE } from "../../routes/routes";
import { AppConfigModel } from '../models/common/app-config.model';
import { LocalizeRouterService } from '@gilsdav/ngx-translate-router';

class RequestOption {
	body?: any;
	headers?: HttpHeaders | {
		[header: string]: string | string[];
	};
	observe?: any;
	params?: HttpParams | {
		[param: string]: string | string[];
	};
	reportProgress?: boolean;
	responseType: any;
	withCredentials?: boolean;
}
@Injectable({
	providedIn: 'root'
})

export class MarkupHttpService {
		public locale: string = 'vi';
	private get TOKEN(): string {
		const token = '';
		return token || "";
	}

	// private get LANGUAGE(): string {
	// let language = this._localStorage.get(LOCAL_STORAGE_KEY.language);
	// if (!language) {
	//     language = LanguageEnum.DEFAULT_LANGUAGE;
	//     this._localStorage.set(LOCAL_STORAGE_KEY.language, language);
	// }
	// return language;
	// return 'en'
	// }

	private _apiPath = AppConfigModel.ApiConfig.url;
	constructor(
		private http: HttpClient,
		// private _authService: AuthService,
		private _router: Router,
		@Inject(PLATFORM_ID) private platformId: Object,
		private localeSvc: LocalizeRouterService,
	) { }

	// public getUploadFileHeaders() {
	// 	const authHeaders = new HttpHeaders()
	// 		.set("Authorization", "bearer " + this.TOKEN)
	// 		.set("Accept-Language", this.LANGUAGE);
	// 	return authHeaders;
	// }

	get(url: string, params?: HttpParams) {
		// debugger;
		url = this._apiPath + url;
		const option = this.getDefaultRequestJsonOption();
		option.params = params;
		return this.executeJsonResponse("GET", url, option);
	}

	post(url: string, data: any) {
		url = this._apiPath + url;
		const option = this.getDefaultRequestJsonOption();
		option.body = data;

		return this.executeJsonResponse("POST", url, option);
	}

	private getDefaultRequestJsonOption() {
		const option = new RequestOption();
		option.headers = this.getDefaultHeaders();
		option.observe = "body";
		option.responseType = "json";
		return option;
	}

	private getDefaultHeaders() {
		let authHeaders = new HttpHeaders();
		authHeaders = authHeaders
			.set("Content-Type", "application/json-patch+json")
			.set("Data-Type", "application/json")
			.set("Accept", "text/plain")
			.set("Accept-Language", this.localeSvc.parser.currentLang)
			.set("Authorization", "bearer " + this.TOKEN)
			.set('locale', this.localeSvc.parser.currentLang);
		return authHeaders;
	}

	private executeJsonResponse(method: string, url: string, option: RequestOption) {
		return this.http.request(method, url, option)
			.pipe(
				map((res: any) => {
					if (res.status === 500) {
						this._router.navigate([ROUTE.GENERIC.ERROR_500_INTERNAL_ERROR()]);
					}
					return res;
				}),
				catchError((error: HttpErrorResponse) => this.handleError(error))
			);
	}

	private handleError(error: HttpErrorResponse) {
		if (error.error instanceof ErrorEvent) {
			// A client-side or network error occurred. Handle it accordingly.
			console.error("An error occurred:", error.error.message);
		} else {
			// The backend returned an unsuccessful response code.
			// The response body may contain clues as to what went wrong,
			console.error(
				`Backend returned code ${error.status}, ` +
				`body was: ${error.error}`);

			let routePath = "";
			if (error.status === 404) {
				routePath = ROUTE.GENERIC.ERROR_404_NOT_FOUND();
			} else if (error.status === 401) {
				routePath = ROUTE.GENERIC.ERROR_401_UNAUTHORIZED();
			} else {
				routePath = ROUTE.GENERIC.ERROR_500_INTERNAL_ERROR();
			}
			this._router.navigate([routePath]);
		}
		// return an observable with a user-facing error message
		return throwError(
			"Something bad happened; please try again later.");

		// return Observable.of();
	}

	showAlert(title) {
		alert(title)
	}
}
