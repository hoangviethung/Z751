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
	) {
		this.activatedRoute.params
			.pipe(map((params) => params.categoryAdminId))
			.subscribe((categoryAdminId) => {
				if (categoryAdminId) {
					this.isEdit = true
					this.crudSvc
						.get(ApiConfig.category.get, categoryAdminId)
						.pipe(map((response) => response.data))
						.subscribe((response) => {
							this.category = response
							if (this.category.parentId == null) {
								this.category.parentId = 0
							}
							this.getCategories()
						})
				} else {
					this.isEdit = false
				}
			})
	}

	ngOnInit(): void {}

	getCategories() {
		const baseCategory: CategoryModel = new CategoryModel()
		baseCategory.previewUrl = ''
		baseCategory.id = 0
		baseCategory.title = 'Danh mục gốc'
		this.crudSvc
			.gets(ApiConfig.category.gets, { languageId: 1 })
			.pipe(map((response) => response.data.items))
			.subscribe((response) => {
				this.categories = response
				this.categories.unshift(baseCategory)
				this.setBaseUrl()
			})
	}

	setAliasTitleToUrl() {
		this.category.seName = this.utilSvc.alias(this.category.title)
	}

	setBaseUrl() {
		const parentId = Number(this.category.parentId)
		const parentCategory = this.categories.find(
			(category) => category.id == parentId
		)
		this.originUrl = this.utilSvc.getOriginUrl(parentCategory.previewUrl)
	}

	addCategory() {
		if (!this.category.parentId) {
			this.category.parentId = null
		}
		this.crudSvc
			.add(ApiConfig.category.add, this.category)
			.subscribe((response) => {
				this.router.navigateByUrl('/admin/category-admin')
			})
	}

	updateCategory() {
		if (this.category.parentId == null || this.category.parentId == 0) {
			this.category.parentId = null
		} else {
			this.category.parentId = Number(this.category.parentId)
		}
		this.crudSvc
			.update(ApiConfig.category.update, this.category)
			.subscribe((response) => {
				this.router.navigateByUrl('/admin/category-admin')
			})
	}
}
