import { Component, OnInit } from '@angular/core'
import { CrudService } from 'src/_core/services/crud.service'
import { ApiConfig } from 'src/_core/configs/api'
import { ActivatedRoute, Router } from '@angular/router'
import { map } from 'rxjs/operators'
import { SectionModel } from 'src/_core/models/section.model'
import { SectionService } from '../section.service'
import { Image } from 'src/_core/models/image.model'

@Component({
	selector: 'app-edit',
	templateUrl: './edit.component.html',
	styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
	section: SectionModel = new SectionModel()
	images: Array<Image>
	constructor(
		private crudSvc: CrudService,
		private activatedRoute: ActivatedRoute,
		private router: Router,
		private sectionSvc: SectionService
	) {}

	ngOnInit(): void {
		this.getSection()
	}

	getSection() {
		this.activatedRoute.params.subscribe((params) => {
			this.sectionSvc
				.getSections()
				.pipe(
					map((response) => {
						return response.find(
							(item) => item.id == params.templateid
						)
					})
				)
				.subscribe((response) => {
					console.log(1)
					this.section = response
					this.images = this.section.images
				})
		})
	}

	addSectionImage(event) {
		const image = new Image()
		image.propertyName = ''
		image.path = ''
		image.order = 0
		image.name = ''
		image.content = ''
		image.alt = ''
		this.images.push(image)
	}

	updateSection() {
		this.section.images = this.images
		this.crudSvc
			.update(ApiConfig.section.update, this.section)
			.subscribe((response) => {
				this.router.navigateByUrl('/admin/section')
			})
	}
	deleteSectionImage(index) {
		this.images.splice(index, 1)
		console.log(this.images)
	}
}
