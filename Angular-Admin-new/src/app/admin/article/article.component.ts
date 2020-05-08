import { Component, OnInit } from '@angular/core';
import { HttpService, InputRequestOption } from 'src/app/_core/services/http.service';
import { APIConfig } from 'src/app/_core/API-config';
import { map } from 'rxjs/operators';
import { ArticleModel } from 'src/app/_core/models/article.model';
import { LanguageModel } from 'src/app/_core/models/language';

@Component({
	selector: 'app-article',
	templateUrl: './article.component.html',
	styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
	articles: Array<ArticleModel>
	article: ArticleModel
	languages: Array<LanguageModel>
	isShowPopup: boolean = false
	isEdit: boolean;
	constructor(
		private httpSvc: HttpService
	) { }

	ngOnInit(): void {
		this.getArticles();
		this.languages = JSON.parse(localStorage.getItem('dataLanguages'))
	}

	getArticles() {
		const params = new InputRequestOption();
		params.params = {
			languageId: '1',
		}
		this.httpSvc.get(APIConfig.Article.Gets, params)
			.subscribe((articles) => {
				this.articles = articles.data.items
			})
	}

	deleteArticle(id) {
		const params = new InputRequestOption()
		params.params = {
			id: id,
		}
		this.httpSvc.post(APIConfig.Article.Delete, params)
			.subscribe(() => {
				this.getArticles()
			})
	}

	fetchArticle(e) {
		const params = new InputRequestOption()
		params.params = {
			languageId: e.target.value,
		}
		this.httpSvc.get(APIConfig.Article.Gets, params)
			.pipe(map((response) => response.data))
			.subscribe((articles) => {
				this.articles = articles;
			});
	}

	onOpenPopup(status, itemEdit?, isEdit?) {
		this.isShowPopup = status;
		if (itemEdit) {
			this.article = itemEdit;
			this.isEdit = isEdit
		} else {
			this.article = new ArticleModel();
			this.isEdit = false
		}
	}

	onClosePopup(status: boolean) {
		this.isShowPopup = status;
		this.getArticles()
	}
}
