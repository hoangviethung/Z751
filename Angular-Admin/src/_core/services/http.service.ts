import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import {
	HttpClient,
	HttpHeaders,
	HttpParams,
	HttpErrorResponse,
} from '@angular/common/http'
import { Observable, throwError } from 'rxjs'
import { map, catchError } from 'rxjs/operators'
import { environment } from 'src/environments/environment'
import { CookieService } from 'ngx-cookie-service'

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
export class HttpService {
	public locale: string = 'vi'

	constructor(
		private http: HttpClient,
		private router: Router,
		private cookieSvc: CookieService
	) {}

	public requestErrorHandler() {
		return {
			ERROR_401_UNAUTHORIZED(): string {
				return '/401'
			},
			ERROR_404_NOT_FOUND(): string {
				return '/404'
			},
			ERROR_500_INTERNAL_ERROR(): string {
				return '/500'
			},
		}
	}

	private get TOKEN(): string {
		const token = JSON.parse(this.cookieSvc.get('userinfo')).accessToken
		return token || ''
	}

	// END

	// DEV without real API
	get(url: string, params?: HttpParams): Observable<any> {
		const option = this.getDefautRequestOptions()
		option.params = params
		return this.request('GET', url, option)
	}

	post(url: string, data?: any) {
		const option = this.getDefautRequestOptions()
		option.body = data
		return this.request('POST', url, option)
	}
	// END

	private getDefautRequestOptions() {
		const option = new RequestOption()
		option.headers = this.getDefaultHeaders()
		option.observe = 'body'
		option.responseType = 'json'
		return option
	}

	private getDefaultHeaders() {
		let authHeaders = new HttpHeaders()
		authHeaders = authHeaders
			.set('Content-Type', 'application/json-patch+json')
			.set('Data-Type', 'application/json')
			.set('Accept', 'text/plain')
			.set('Authorization', 'Bearer ' + this.TOKEN)
		return authHeaders
	}

	private request(method: string, url: string, option: RequestOption) {
		const absoluteUrl = environment.remoteBaseUrl + url
		return this.http.request(method, absoluteUrl, option).pipe(
			map((res: any) => {
				if (res.status === 500) {
					return this.router.navigate([
						this.requestErrorHandler().ERROR_500_INTERNAL_ERROR(),
					])
				}
				return res
			}),
			catchError((error: HttpErrorResponse) => this.handleError(error))
		)
	}

	private handleError(error: HttpErrorResponse) {
		if (error.error instanceof ErrorEvent) {
			// A client-side or network error occurred. Handle it accordingly.
			console.error('An error occurred:', error)
		} else {
			// The backend returned an unsuccessful response code.
			// The response body may contain clues as to what went wrong,
			console.error(
				`Backend returned code ${error.status}, body was: ${error.error}`
			)

			let routePath = ''
			if (error.status === 404) {
				routePath = this.requestErrorHandler().ERROR_404_NOT_FOUND()
			} else if (error.status === 401) {
				routePath = this.requestErrorHandler().ERROR_401_UNAUTHORIZED()
			} else {
				routePath = this.requestErrorHandler().ERROR_500_INTERNAL_ERROR()
			}
			this.router.navigate([routePath])
		}
		// return an observable with a user-facing error message
		return throwError('Something bad happened; please try again later.')
		// return Observable.of();
	}
}
