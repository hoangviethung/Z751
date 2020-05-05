import { Component, OnInit } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router'
import { map } from 'rxjs/operators'
import { ApiConfig } from 'src/_core/configs/api'
import { templates } from 'src/_core/configs/templates'
import { CrudService } from 'src/_core/services/crud.service'
import { UtilService } from 'src/_core/services/util.service'
import { TemplateModel } from 'src/_core/models/template.model'
import { CategoryModel } from 'src/_core/models/category.model'
import { LanguageModel } from 'src/_core/models/language'
import { LanguageService } from 'src/_core/services/language.service'

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
	languages: Array<LanguageModel>
	templates: Array<TemplateModel> = templates
	currentPreviewUrl: string

	constructor(
		private crudSvc: CrudService,
		private router: Router,
		private activatedRoute: ActivatedRoute,
		private utilSvc: UtilService,
		private languageSvc: LanguageService
	) {
		this.category.template = 1
		this.category.parentId = 0
	}

	ngOnInit(): void {
		this.getCategories()
		this.getLanguages()
		this.setBaseUrl()
	}

	setBaseUrl() {
		this.originUrl = this.utilSvc.getOriginUrl()
	}
	updateBaseUrl() {
		const parentId = Number(this.category.parentId)
		const item = this.categories.find((item) => {
			if (parentId == item.parentId) {
				console.log(item)
				return item
			}
		})
	}

	setAliasTitleToUrl() {
		this.category.seName = this.utilSvc.alias(this.category.title)
	}

	getCategories() {
		const baseCategory: CategoryModel = new CategoryModel()
		baseCategory.previewUrl = ''
		baseCategory.id = 0
		baseCategory.title = 'Danh mục gốc'
		this.crudSvc
			.gets(ApiConfig.category.gets, { languageId: 1 })
			.pipe(
				map((response) => response.data.items),
				map((items) => items)
			)
			.subscribe((response) => {
				this.categories = response
				this.categories.unshift(baseCategory)

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
									this.updateBaseUrl()
								})
						} else {
							this.isEdit = false
						}
					})
			})
	}

	getLanguages() {
		this.languageSvc
			.gets(ApiConfig.language.gets)
			.subscribe((languages) => {
				this.languages = languages
			})
	}

	addCategory() {
		this.category.parentId = Number(this.category.parentId)
		this.category.template = Number(this.category.template)
		this.category.languageId = Number(this.category.languageId)
		this.crudSvc
			.add(ApiConfig.category.add, this.category)
			.subscribe((response) => {
				this.router.navigateByUrl('/admin/category-admin')
			})
	}

	updateCategory() {
		this.category.id = Number(this.category.id)
		this.category.parentId = Number(this.category.parentId)
		this.category.template = Number(this.category.template)
		this.category.languageId = Number(this.category.languageId)
		this.crudSvc
			.update(ApiConfig.category.update, this.category)
			.subscribe((response) => {
				this.router.navigateByUrl('/admin/category-admin')
			})
	}
	onChangeEmitter(content) {
		this.category.description = content.editor.getData()
	}
}
