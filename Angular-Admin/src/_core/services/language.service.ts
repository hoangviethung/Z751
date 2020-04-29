import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class LanguageService {

	constructor(
		private htttpSvc: HttpService
	) { }

	gets(url: string, params?): Observable<any> {
		return this.htttpSvc.get(url).pipe(map(response => response.data))
	}
}