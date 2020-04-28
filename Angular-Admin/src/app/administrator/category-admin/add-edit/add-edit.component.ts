import { Component, OnInit } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router'
import { CategoryModel } from 'src/_core/models/category.model'
import { CrudService } from 'src/_core/services/crud.service'
import { ApiConfig } from 'src/_core/configs/api'
import { templates } from 'src/_core/configs/templates'
import { UtilService } from 'src/_core/services/util.service'
import { TemplateModel } from 'src/_core/models/template.model'
import { map } from 'rxjs/operators'

@Component({
	selector: 'app-add-edit',
	templateUrl: './add-edit.component.html',
	styleUrls: ['./add-edit.component.scss'],
})
export class AddEditComponent implements OnInit {
	categories: Array<CategoryModel>
	category: CategoryModel = new CategoryModel()
	originUrl: string
	isEdit = false

	templates: Array<TemplateModel> = templates

	constructor(
		private crudSvc: CrudService,
		private router: Router,
		private activatedRoute: ActivatedRoute,
		private utilSvc: UtilService
	) {}

	ngOnInit(): void {
		this.originUrl = this.utilSvc.getOriginUrl()
		this.getCategories()
		this.activatedRoute.params
			.pipe(map((params) => params.categoryAdminId))
			.subscribe((categoryAdminId) => {
				if (categoryAdminId) {
					this.isEdit = true
					this.crudSvc
						.get(ApiConfig.category.get, categoryAdminId)
						.subscribe((result) => {
							this.category = result.data
						})
				} else {
					this.isEdit = false
				}
			})
	}

	getCategories() {
		const homepage = new CategoryModel()
		homepage.parentId = null
		homepage.title = 'Danh mục gốc'
		homepage.externalUrl = '/'
		this.crudSvc
			.gets(ApiConfig.category.gets, { languageId: 1 })
			.subscribe((response) => {
				console.log(response)
				this.categories = response.data.items
				this.categories.unshift(homepage)
			})
	}

	setAliasTitleToUrl() {
		this.category.seName = this.utilSvc.alias(this.category.title)
	}

	updateCategory() {
		this.crudSvc
			.update(ApiConfig.category.update, this.category)
			.subscribe((response) => {
				this.router.navigateByUrl('/admin/category-admin')
			})
	}

	addCategory() {
		if (!this.category.parentId) {
			this.category.parentId = null
		}
		this.crudSvc
			.add(ApiConfig.category.add, this.category)
			.subscribe((response) => {
				console.log(response)
				this.router.navigateByUrl('/admin/category-admin')
			})
	}
}
