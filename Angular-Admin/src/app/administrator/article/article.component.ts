import { Component, OnInit } from '@angular/core'
import { ArticleModel } from 'src/_core/models/article.model'
import { CrudService } from 'src/_core/services/crud.service'
import { ApiConfig } from 'src/_core/configs/api'

@Component({
	selector: 'app-article',
	templateUrl: './article.component.html',
	styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
	articles: Array<ArticleModel>

	constructor(private crudSvc: CrudService) {}

	ngOnInit(): void {
		this.getArticles()
	}

	getArticles() {
		this.crudSvc
			.fetch(ApiConfig.article.gets, { languageId: 1 })
			.subscribe((response) => {
				console.log(response)
				this.articles = response.data.items
			})
	}
}
