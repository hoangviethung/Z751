import { Component, OnInit } from '@angular/core'
import { CrudService } from 'src/_core/services/crud.service'
import { ApiConfig } from 'src/_core/configs/api'
import { SectionModel } from 'src/_core/models/section.model'
import { Router } from '@angular/router'
import { Section } from 'src/_core/configs/section'
import { SectionService } from './section.service'
import { map } from 'rxjs/operators'

@Component({
	selector: 'app-section',
	templateUrl: './section.component.html',
	styleUrls: ['./section.component.scss'],
})
export class SectionComponent implements OnInit {
	sections: Array<SectionModel>
	constructor(
		private crudSvc: CrudService,
		private router: Router,
		private sectionSvc: SectionService
	) { }

	ngOnInit(): void {
		this.getSections()
	}

	getSections() {
		this.crudSvc
			.gets(ApiConfig.section.gets, { languageId: 1 })
			.pipe(map((response) => response.data))
			.subscribe((response) => {
				this.sections = response
				this.sectionSvc.setSections(this.sections)
				this.sections.forEach((item) => {
					item.orderTitle = Section[item.order].title
				})
			})
	}

	editSection(id) {
		this.router.navigate([`/admin/section/edit/${id}`])
	}
}
