import { Injectable } from '@angular/core'
import { SectionModel } from 'src/_core/models/section.model'
import { CrudService } from 'src/_core/services/crud.service'
import { ApiConfig } from 'src/_core/configs/api'
import { map } from 'rxjs/operators'
import { Observable, observable } from 'rxjs'
import { Image } from 'src/_core/models/image.model'

@Injectable({
	providedIn: 'root',
})
export class SectionService {
	public sections: Array<SectionModel> = []
	public images: Array<Image>

	constructor(private crudSvc: CrudService) {}

	getSections() {
		if (this.sections.length > 0) {
			return new Observable((observer) => {
				observer.next(this.sections)
			})
		} else {
			return this.crudSvc
				.gets(ApiConfig.section.gets, { languageId: 1 })
				.pipe(map((response) => response.data))
		}
	}

	setSections(sections) {
		this.sections = sections
	}
}
