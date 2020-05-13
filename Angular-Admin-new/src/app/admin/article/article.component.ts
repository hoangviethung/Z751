import { Component, OnInit } from '@angular/core';
import { InputRequestOption } from 'src/app/_core/services/http.service';
import { APIConfig } from 'src/app/_core/API-config';
import { ArticleModel } from 'src/app/_core/models/article.model';
import { LanguageModel } from 'src/app/_core/models/language';
import { CategoryModel } from 'src/app/_core/models/category.model';
import { ToastrService } from 'ngx-toastr';
import { CrudService } from 'src/app/_core/services/crud.service';
import { FilterSearchModel } from 'src/app/_core/models/filter.model';
import { UtilService } from 'src/app/_core/services/util.service';
import { TemplateModel } from 'src/app/_core/models/template.model';
import { TemplatesConfig } from 'src/app/_core/templates-config';
import { FormControl } from '@angular/forms';
@Component({
	selector: 'app-article',
	templateUrl: './article.component.html',
	styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
	articles: Array<ArticleModel>;
	article: ArticleModel;
	languages: Array<LanguageModel>;
	categories: Array<CategoryModel>;
	isShowPopup: boolean = false;
	isEdit: boolean;
	search: FilterSearchModel = new FilterSearchModel();
	templates: Array<TemplateModel> = TemplatesConfig;
	templatesControl = new FormControl();
	constructor(
		private crudSvc: CrudService,
		private toastrSvc: ToastrService,
		private utilSvc: UtilService
	) { }

	ngOnInit(): void {
		this.getArticles();
		this.languages = this.utilSvc.getLanguages();
	}

	getArticles() {
		const params = new InputRequestOption();
		params.params = {
			languageId: '1',
		};
		this.crudSvc
			.get(APIConfig.Article.Gets, params)
			.subscribe((articles) => {
				this.articles = articles.data.items;
			});
	}

	fetchArticle(e) {
		const params = new InputRequestOption();
		params.params = {
			languageId: e,
		};
		this.crudSvc
			.get(APIConfig.Article.Gets, params)
			.subscribe((response) => {
				this.articles = response.data.items;
			});
	}

	filterArticle() {
		const options = new InputRequestOption();
		options.params = {
			languageId: this.search.languageId,
			text: this.search.keywords || '',
		};
		this.crudSvc
			.get(APIConfig.Article.Gets, options)
			.subscribe((response) => {
				this.articles = response.data.items;
			});
	}

	deleteArticle(id) {
		const params = new InputRequestOption();
		params.params = {
			id: id,
		};
		this.crudSvc
			.delete(APIConfig.Article.Delete, params)
			.subscribe((response) => {
				if (response.code == 200) {
					this.getArticles();
					this.toastrSvc.success(response.message);
				} else {
					this.toastrSvc.error(response.message);
				}
			});
	}
}
