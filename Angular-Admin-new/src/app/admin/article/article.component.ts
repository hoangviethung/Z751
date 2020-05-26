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
import { CookieService } from 'src/app/_core/services/cookie.service';
import { TemplateModel } from 'src/app/_core/models/template.model';
import { FormControl } from '@angular/forms';
import { TemplatesConfig } from 'src/app/_core/templates-config';
import { ArticleService } from './article.service';
import { PaginationModel } from 'src/app/_core/models/pagination';

@Component({
	selector: 'app-article',
	templateUrl: './article.component.html',
	styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
	articles: Array<ArticleModel>;
	languages: Array<LanguageModel>;
	categories: Array<CategoryModel>;
	search: FilterSearchModel = new FilterSearchModel();
	pagination: PaginationModel = new PaginationModel(10, 1);
	categoryControl = new FormControl();
	templates: Array<TemplateModel> = TemplatesConfig;
	templatesControl = new FormControl();
	languageCurrent;
	isTitleEnglist: boolean;
	totalItems: number;

	constructor(
		private crudSvc: CrudService,
		private toastrSvc: ToastrService,
		private utilSvc: UtilService,
		private ArticleSvc: ArticleService
	) {}

	ngOnInit(): void {
		const opts = new InputRequestOption();
		opts.params = {
			languageId: this.search.languageId,
			categoryId: this.search.categoryId,
			page: this.pagination.page.toString(),
			itemPerPage: this.pagination.itemPerPage.toString(),
		};
		this.languages = this.utilSvc.getLanguages();
		this.languageCurrent = this.ArticleSvc.getLaunguage();
		this.getCategories(1);
		this.fetchArticle(opts);
	}

	getDataCategory(e) {
		this.search.categoryId = e;
	}

	getCategories(event) {
		const opts = new InputRequestOption();
		opts.params = {
			languageId: event,
		};
		this.crudSvc
			.get(APIConfig.Category.Gets, opts)
			.subscribe((response) => {
				this.categories = response.data.items;
				this.categories.forEach((item) => {
					if (item.parentName == null) {
						item.parentName = '';
					} else {
						item.parentName += ' >> ';
					}
				});
			});
	}

	fetchArticle(opts?) {
		this.crudSvc.get(APIConfig.Article.Gets, opts).subscribe((response) => {
			this.articles = response.data.items;
			this.totalItems = response.data.total;
		});
	}

	filterArticle() {
		const opts = new InputRequestOption();
		opts.params = {
			languageId: this.search.languageId,
			categoryId: this.search.categoryId,
			page: this.pagination.page.toString(),
			itemPerPage: this.pagination.itemPerPage.toString(),
			text: this.search.keywords || '',
		};
		this.fetchArticle(opts);
	}

	deleteArticle(id) {
		const opts = new InputRequestOption();
		opts.params = {
			id: id,
		};
		this.crudSvc
			.delete(APIConfig.Article.Delete, opts)
			.subscribe((response) => {
				if (response.code == 200) {
					const optsFetch = new InputRequestOption();
					optsFetch.params = {
						languageId: this.search.languageId,
						categoryId: this.search.categoryId,
						page: this.pagination.page.toString(),
						itemPerPage: this.pagination.itemPerPage.toString(),
					};
					this.fetchArticle(optsFetch);
					this.toastrSvc.success(response.message);
				} else {
					this.toastrSvc.error(response.message);
				}
			});
	}
}
