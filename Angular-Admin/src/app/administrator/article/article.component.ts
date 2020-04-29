import { Component, OnInit } from '@angular/core'
import { ArticleModel } from 'src/_core/models/article.model'
import { CrudService } from 'src/_core/services/crud.service'
import { ApiConfig } from 'src/_core/configs/api'
import { Router } from '@angular/router'
import { CategoryModel } from 'src/_core/models/category.model'

@Component({
	selector: 'app-article',
	templateUrl: './article.component.html',
	styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
	articles: Array<ArticleModel>;
	categories: Array<CategoryModel>;
	constructor(private crudSvc: CrudService, private router: Router, ) { }

	ngOnInit(): void {
		this.getArticles();
	}

	getArticles() {
		this.crudSvc
			.gets(ApiConfig.article.gets, { languageId: 1 })
			.subscribe((response) => {
				console.log(response);
				this.articles = response.data.items
			})
	}

	editArticle(id) {
		this.router.navigate([`/admin/article/edit/${id}`])
	}

	deleteArticle(id) {
		this.crudSvc
			.delete(ApiConfig.article.delete, id)
			.subscribe((response) => {
				console.log(response)
				this.getArticles()
			})
	}
}
