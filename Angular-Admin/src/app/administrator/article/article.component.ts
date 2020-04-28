import { Component, OnInit } from '@angular/core'
import { ArticleModel } from 'src/_core/models/article.model'
import { CrudService } from 'src/_core/services/crud.service'
import { ApiConfig } from 'src/_core/configs/api'
import { Router } from '@angular/router'

@Component({
	selector: 'app-article',
	templateUrl: './article.component.html',
	styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
	articles: Array<ArticleModel>

	constructor(private crudSvc: CrudService, private router: Router, ) { }

	ngOnInit(): void {
		this.getArticles()
	}

	getArticles() {
		this.crudSvc
			.fetch(ApiConfig.article.gets, { languageId: 1 })
			.subscribe((response) => {
				this.articles = response.data.items
			})
	}

	getArticleById(id) {
		this.crudSvc.get(ApiConfig.article.update, id)
			.subscribe((response) => {
				console.log(response);
				this.getArticles();
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
