import { Injectable } from '@angular/core';
import { HttpService, InputRequestOption } from './http.service';
import { Observable } from 'rxjs';
import { ResponseModel } from '../models/response.model';

@Injectable({
	providedIn: 'root',
})
export class CrudService {
	constructor(private httpSvc: HttpService) {}

	get(url: string, options?: InputRequestOption): Observable<ResponseModel> {
		return this.httpSvc.get(url, options);
	}

	add(url: string, options: InputRequestOption): Observable<ResponseModel> {
		return this.httpSvc.post(url, options);
	}

	update(
		url: string,
		options: InputRequestOption
	): Observable<ResponseModel> {
		return this.httpSvc.post(url, options);
	}

	delete(
		url: string,
		options: InputRequestOption
	): Observable<ResponseModel> {
		return this.httpSvc.post(url, options);
	}
}
