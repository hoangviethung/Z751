import { Injectable } from '@angular/core'
import { HttpService } from './http.service'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { LanguageModel } from '../models/language'

@Injectable({
	providedIn: 'root',
})
export class LanguageService {
	public languages: Array<LanguageModel>

	constructor(private httpSvc: HttpService) {}

	gets(url: string): Observable<any> {
		return this.httpSvc.get(url).pipe(map((response) => response.data))
	}
}
