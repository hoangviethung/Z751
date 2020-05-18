import { Injectable } from '@angular/core'
import { HttpService } from './http.service'
import { Observable } from 'rxjs'
import { HttpParams } from '@angular/common/http'

@Injectable({
	providedIn: 'root',
})
export class CrudService {
	constructor(private httpSvc: HttpService) {}

	get(url: string, params?): Observable<any> {
		return this.httpSvc.get(url, params)
	}

	gets(url: string, params?): Observable<any> {
		return this.httpSvc.get(url, params)
	}

	add(url: string, data: any, params?): Observable<any> {
		return this.httpSvc.post(url, data, params)
	}

	update(url: string, data: any, params?): Observable<any> {
		return this.httpSvc.post(url, data, params)
	}

	delete(url: string, params?): Observable<any> {
		return this.httpSvc.post(url, params)
	}
}
