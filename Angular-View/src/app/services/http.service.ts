import {
	Injectable,
	// Inject,
	// PLATFORM_ID
} from "@angular/core";
import { Router } from "@angular/router";
import {
	HttpClient,
	HttpHeaders,
	HttpParams,
	HttpErrorResponse,
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { environment } from "src/environments/environment";
// import { AppConfigModel } from "../../models/common/app-config.model";
import { LocalizeRouterService } from "@gilsdav/ngx-translate-router";

class RequestOption {
	body?: any;
	headers?:
		| HttpHeaders
		| {
				[header: string]: string | string[];
		  };
	observe?: any;
	params?:
		| HttpParams
		| {
				[param: string]: string | string[];
		  };
	reportProgress?: boolean;
	responseType: any;
	withCredentials?: boolean;
}

@Injectable({
	providedIn: "root",
})
export class HttpService {
	public locale: string = "vi";
	// private _apiPath = AppConfigModel.ApiConfig.url;

	constructor(
		// private _authService: AuthService,
		private http: HttpClient,
		private router: Router,
		private localizeSvc: LocalizeRouterService // @Inject(PLATFORM_ID) private platformId: Object
	) {}

	public errorRouteHandler() {
		const _this = this;
		return {
			ERROR_401_UNAUTHORIZED(): string {
				return _this.localizeSvc.translateRoute("/401").toString();
			},
			ERROR_404_NOT_FOUND(): string {
				return _this.localizeSvc.translateRoute("/404").toString();
			},
			ERROR_500_INTERNAL_ERROR(): string {
				return _this.localizeSvc.translateRoute("/500").toString();
			},
		};
	}

	private get TOKEN(): string {
		const token = "";
		return token || "";
	}

	// public getUploadFileHeaders() {
	// 	const authHeaders = new HttpHeaders()
	// 		.set("Authorization", "bearer " + this.TOKEN)
	// 		.set("Accept-Language", this.LANGUAGE);
	// 	return authHeaders;
	// }

	// DEV with real API

	// get(url: string, params?: HttpParams) {
	// 	// debugger;
	// 	url = this._apiPath + url;
	// 	const option = this.getDefaultRequestJsonOption();
	// 	option.params = params;
	// 	return this.executeJsonResponse("GET", url, option);
	// }
	// post(url: string, data: any) {
	// 	url = this._apiPath + url;
	// 	const option = this.getDefaultRequestJsonOption();
	// 	option.body = data;
	// 	return this.executeJsonResponse("POST", url, option);
	// }

	// END

	// DEV without real API
	get(url: string, params?: HttpParams): Observable<any> {
		const fullUrl = environment.locales + url;
		const option = this.getDefaultRequestJsonOption();
		option.params = params;
		return this.executeJsonResponse("GET", fullUrl, option);
	}
	post(url: string, data: any) {
		const fullUrl = environment.locales + url;
		const option = this.getDefaultRequestJsonOption();
		option.body = data;
		return this.executeJsonResponse("POST", fullUrl, option);
	}
	// END

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
			.set("Accept-Language", this.localizeSvc.parser.currentLang)
			.set("Authorization", "bearer " + this.TOKEN)
			.set("locale", this.localizeSvc.parser.currentLang);
		return authHeaders;
	}

	private executeJsonResponse(
		method: string,
		url: string,
		option: RequestOption
	) {
		return this.http.request(method, url, option).pipe(
			map((res: any) => {
				if (res.status === 500) {
					// this.router.navigate([
					// 	ROUTE.GENERIC.ERROR_500_INTERNAL_ERROR(),
					// ]);
					this.router.navigate([
						this.errorRouteHandler().ERROR_500_INTERNAL_ERROR(),
					]);
				}
				return res;
			}),
			catchError((error: HttpErrorResponse) => this.handleError(error))
		);
	}

	private handleError(error: HttpErrorResponse) {
		if (error.error instanceof ErrorEvent) {
			// A client-side or network error occurred. Handle it accordingly.
			console.error("An error occurred:", error);
		} else {
			// The backend returned an unsuccessful response code.
			// The response body may contain clues as to what went wrong,
			console.error(
				`Backend returned code ${error.status}, body was: ${error.error}`
			);

			let routePath = "";
			if (error.status === 404) {
				routePath = this.errorRouteHandler().ERROR_404_NOT_FOUND();
			} else if (error.status === 401) {
				routePath = this.errorRouteHandler().ERROR_401_UNAUTHORIZED();
			} else {
				routePath = this.errorRouteHandler().ERROR_500_INTERNAL_ERROR();
			}
			this.router.navigate([routePath]);
		}
		// return an observable with a user-facing error message
		return throwError("Something bad happened; please try again later.");
		// return Observable.of();
	}

	showAlert(title) {
		alert(title);
	}
}
