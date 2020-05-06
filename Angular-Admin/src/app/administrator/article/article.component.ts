import { Component, OnInit } from '@angular/core'
import { ArticleModel } from 'src/_core/models/article.model'
import { CrudService } from 'src/_core/services/crud.service'
import { ApiConfig } from 'src/_core/configs/api'
import { Router } from '@angular/router'
import { CategoryModel } from 'src/_core/models/category.model'
import { LanguageService } from 'src/_core/services/language.service'
import { LanguageModel } from 'src/_core/models/language'

@Component({
	selector: 'app-article',
	templateUrl: './article.component.html',
	styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
	articles: Array<ArticleModel>
	categories: Array<CategoryModel>
	languages: Array<LanguageModel>
	constructor(
		private crudSvc: CrudService,
		private router: Router,
		private languageSvc: LanguageService
	) { }


	ngOnInit(): void {
		this.getArticles()
		this.getLanguages();
	}

	getLanguages() {
		this.languageSvc.getLanguages().subscribe((languages) => {
			this.languages = languages
			this.languageSvc.setLanguages(languages)
		})
	}

	getArticles(id: string = '1') {
		this.crudSvc
			.gets(ApiConfig.article.gets, { languageId: id })
			.subscribe((response) => {
				this.articles = response.data.items
				console.log(this.articles);
			})
	}

	editArticle(id) {
		this.router.navigate([`/admin/article/edit/${id}`])
	}

	deleteArticle(id) {
		this.crudSvc
			.delete(ApiConfig.article.delete, { id: id })
			.subscribe((response) => {
				console.log(response)
				this.getArticles()
			})
	}

	fetchBanner(e) {
		this.getArticles(e.target.value)
	}
}
