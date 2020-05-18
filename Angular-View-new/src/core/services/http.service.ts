import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import {
	HttpClient,
	HttpHeaders,
	HttpParams,
	HttpErrorResponse,
} from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { environment } from "src/environments/environment";

export class RequestOption {
	body?: any;
	params?: HttpParams | { [param: string]: string | string[] };
	headers?: HttpHeaders | { [header: string]: string | string[] };
	observe?: "body";
	reportProgress?: boolean;
	responseType: any;
	withCredentials?: boolean;
}

export class InputRequestOption {
	body?: any;
	params?: HttpParams | { [param: string]: string | string[] };
}

@Injectable({
	providedIn: "root",
})
export class HttpService {
	public locale: string = "vi";
	// private _apiPath = AppConfigModel.ApiConfigModel.url;

	constructor(
		// private _authService: AuthService,
		private http: HttpClient,
		private router: Router
	) {}

	private get TOKEN(): string {
		const token = "";
		return token || "";
	}

	get(url: string, opts?: InputRequestOption): Observable<any> {
		const option = this.getDefaultRequestJsonOption(opts);
		return this.executeJsonResponse("GET", url, option);
	}

	post(url: string, opts?: InputRequestOption) {
		const option = this.getDefaultRequestJsonOption(opts);
		return this.executeJsonResponse("POST", url, option);
	}

	private getDefaultRequestJsonOption(options) {
		const option = new RequestOption();
		option.headers = this.getDefaultHeaders();
		option.observe = "body";
		option.responseType = "json";
		if (options) {
			option.params = options.params;
			option.body = options.body;
		}
		return option;
	}

	private getDefaultHeaders() {
		let authHeaders = new HttpHeaders();
		authHeaders = authHeaders
			.set("Content-Type", "application/json-patch+json")
			.set("Data-Type", "application/json")
			.set("Accept", "text/plain");
		return authHeaders;
	}

	private executeJsonResponse(
		method: string,
		url: string,
		option: RequestOption
	) {
		const fullUrl = environment.remoteBaseUrl + url;
		return this.http.request(method, fullUrl, option).pipe(
			map((response) => {
				return response;
			})
		);
	}
}
