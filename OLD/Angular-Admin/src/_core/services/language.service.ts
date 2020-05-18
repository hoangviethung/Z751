import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { LanguageModel, EnumLanguage } from '../models/language'
import { CrudService } from './crud.service'
import { ApiConfig } from '../configs/api'

@Injectable({
	providedIn: 'root',
})
export class LanguageService {
	private languages: Array<LanguageModel> = []
	private currentLanguage: string

	constructor(private crudSvc: CrudService) {}

	getLanguages(): Observable<Array<LanguageModel>> {
		if (this.languages.length > 0) {
			return new Observable((observer) => observer.next(this.languages))
		} else {
			return this.crudSvc.gets(ApiConfig.language.gets).pipe(
				map((response) => {
					this.setLanguages(response.data)
					return response.data
				})
			)
		}
	}

	setLanguages(languages: Array<LanguageModel>) {
		this.languages = languages
	}
}
