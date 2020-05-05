import { Component, OnInit } from '@angular/core'
import { ArticleModel } from 'src/_core/models/article.model'
import { CrudService } from 'src/_core/services/crud.service'
import { ActivatedRoute, Router } from '@angular/router'
import { map } from 'rxjs/operators'
import { ApiConfig } from 'src/_core/configs/api'
import { UtilService } from 'src/_core/services/util.service'
import { CategoryModel } from 'src/_core/models/category.model'
import { LanguageService } from 'src/_core/services/language.service'
import { LanguageModel } from 'src/_core/models/language'
import { CKEditorToolbarConfig } from 'src/_core/configs/ckeditor'

@Component({
	selector: 'app-add-edit',
	templateUrl: './add-edit.component.html',
	styleUrls: ['./add-edit.component.scss'],
})
export class AddEditComponent implements OnInit {
	article: ArticleModel = new ArticleModel()
	languages: Array<LanguageModel>
	categories: Array<CategoryModel>
	category: CategoryModel = new CategoryModel()
	isEdit = {
		status: false,
	}
	originUrl: string
	CKEditorToolbarConfig
	constructor(
		private crudSvc: CrudService,
		private activatedRoute: ActivatedRoute,
		private router: Router,
		private utilSvc: UtilService,
		private languageSvc: LanguageService
	) {}

	ngOnInit(): void {
		this.getLanguages()
		this.getCategories()
		this.originUrl = this.utilSvc.getOriginUrl()
		this.activatedRoute.params
			.pipe(map((params) => params.articleid))
			.subscribe((articleId) => {
				if (articleId) {
					this.isEdit.status = true
					this.crudSvc
						.get(ApiConfig.article.get, articleId)
						.subscribe((result) => {
							this.article = result.data
						})
				} else {
					this.isEdit.status = false
				}
			})
	}

	updateArticle() {
		this.crudSvc
			.update(ApiConfig.article.update, this.article)
			.subscribe((response) => {
				this.router.navigateByUrl('/admin/article')
			})
	}

	addArticle() {
		this.crudSvc
			.add(ApiConfig.article.add, this.article)
			.subscribe((response) => {
				this.router.navigateByUrl('/admin/article')
			})
	}

	setAliasTitleToUrl() {
		this.article.seName = this.utilSvc.alias(this.article.title)
	}

	getCategories() {
		const homepage = new CategoryModel()
		homepage.parentId = null
		homepage.title = 'Danh mục gốc'
		homepage.externalUrl = '/'
		this.crudSvc
			.gets(ApiConfig.category.gets, { languageId: 1 })
			.subscribe((response) => {
				this.categories = response.data.items
				this.categories.unshift(homepage)
			})
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

	getLanguages() {
		this.languageSvc.gets(ApiConfig.language.gets).subscribe((response) => {
			this.languages = response
		})
	}
	onChangeEmitter(content) {
		this.article.description = content.editor.getData()
	}
}
