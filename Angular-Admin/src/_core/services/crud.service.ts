import { Injectable } from '@angular/core'
import { HttpService } from './http.service'
import { Observable } from 'rxjs'
import { HttpParams } from '@angular/common/http'

@Injectable({
	providedIn: 'root',
})
export class CrudService {
	constructor(private httpSvc: HttpService) { }

	fetch(url: string, params?): Observable<any> {
		return this.httpSvc.get(url, params)
	}

	get(url: string, id: string): Observable<any> {
		const params = new HttpParams().set('id', id)
		return this.httpSvc.get(url, params)
	}

	add(url: string, data: any) {
		return this.httpSvc.post(url, data)
	}

	update(url: string, data: any) {
		return this.httpSvc.post(url, data)
	}

	delete(url: string, id: string) {
		const params = new HttpParams().set('id', id)
		return this.httpSvc.post(`${url}?${params.toString()}`)
	}
}
