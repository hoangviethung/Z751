import { Injectable, Inject, PLATFORM_ID } from "@angular/core";
import {
	HttpClient,
	HttpHeaders,
	HttpParams,
	HttpErrorResponse,
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { environment } from "src/environments/environment";
import { isPlatformBrowser } from "@angular/common";
import { API } from "../configs/api";
import { LanguageModel } from "../models/Language.model";
import { map, catchError, retry } from "rxjs/operators";
import { LanguageService } from "./language.service";

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
	public currentLanguage: string = "vi";

	constructor(private http: HttpClient, private langSvc: LanguageService, ) {}

	get(url: string, opts?: InputRequestOption): Observable<any> {
		const option = this.getDefaultRequestJsonOption(opts);
		return this.executeJsonResponse("GET", url, option);
	}

	post(url: string, opts?: InputRequestOption): Observable<any> {
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
			.set("Accept", "text/plain")
			.set("LanguageKey", this.langSvc.currentLanguage);
		return authHeaders;
	}

	private executeJsonResponse(
		method: string,
		url: string,
		option: RequestOption
	) {
		const fullUrl = environment.remoteBaseUrl + url;
		return this.http
			.request(method, fullUrl, option)
			.pipe(retry(1), catchError(this.handleError));
	}

	handleError(error) {
		let errorMessage = "";
		if (error.error instanceof ErrorEvent) {
			// client-side error
			errorMessage = `Error: ${error.error.message}`;
		} else {
			// server-side error
			errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
		}
		console.log(errorMessage);
		return throwError(errorMessage);
	}
}
