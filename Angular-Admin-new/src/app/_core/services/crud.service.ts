import { Injectable } from '@angular/core';
import { HttpService, InputRequestOption } from './http.service';
import { Observable } from 'rxjs';
import { ResponseModel } from '../models/response.model';
import { map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root',
})
export class CrudService {
	constructor(private httpSvc: HttpService) {}

	add(url: string, options: InputRequestOption): Observable<ResponseModel> {
		return this.httpSvc.post(url, options).pipe(
			map((response) => {
				if (response.code !== 200) {
					console.log(response);
				}
				return response;
			})
		);
	}

	update(
		url: string,
		options: InputRequestOption
	): Observable<ResponseModel> {
		return this.httpSvc.post(url, options).pipe(
			map((response) => {
				if (response.code !== 200) {
					console.log(response);
				}
				return response;
			})
		);
	}

	get(url: string, options?: InputRequestOption): Observable<ResponseModel> {
		return this.httpSvc.get(url, options).pipe(
			map((response) => {
				if (response.code !== 200) {
					console.log(response);
				}
				return response;
			})
		);
	}
}
