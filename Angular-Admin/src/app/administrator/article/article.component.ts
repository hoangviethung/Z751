import { Component, OnInit } from '@angular/core';
import { ArticleService } from './article.service';
import { Router } from '@angular/router';
import { ArticleModel } from 'src/_core/models/article.model';
import { log } from 'util';

@Component({
	selector: 'app-article',
	templateUrl: './article.component.html',
	styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
	articles: Array<ArticleModel>
	constructor(
		private articleSvc: ArticleService,
	) { }

	ngOnInit(): void {
		this.getArticles()
	}

	getArticles() {
		this.articleSvc.fetch({ languageId: 1 }).subscribe((response) => {
			console.log(response);
			this.articles = response.data.items
		})
	}
}
