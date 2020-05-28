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
import { PaginationModel } from 'src/app/_core/models/pagination';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'app-article',
	templateUrl: './article.component.html',
	styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
	articles: Array<ArticleModel>;
	languages: Array<LanguageModel>;
	search: FilterSearchModel = new FilterSearchModel();
	pagination: PaginationModel = new PaginationModel(10, 1);
	categories: Array<CategoryModel>;
	languageCurrent;
	isTitleEnglist: boolean;
	totalItems: number;
	page: number;

	constructor(
		private crudSvc: CrudService,
		private toastrSvc: ToastrService,
		private utilSvc: UtilService,
		private activatedRoute: ActivatedRoute,
		private router: Router
	) {}

	ngOnInit(): void {
		this.languages = this.utilSvc.getLanguages();
		this.getAll();
	}

	getAll() {
		this.activatedRoute.queryParams.subscribe((queryParams) => {
			const defaultParams = {
				languageId: this.search.languageId,
				categoryId: this.search.categoryId,
				page: this.pagination.page.toString(),
				itemPerPage: this.pagination.itemPerPage.toString(),
			};
			for (const key in queryParams) {
				if (queryParams.hasOwnProperty(key)) {
					defaultParams[key] = queryParams[key];
				}
				if (key == 'languageId' || key == 'categoryId') {
					this.search[key] = queryParams[key];
				}
			}
			if (queryParams.page) {
				this.pagination.page = queryParams.page;
			}

			if (queryParams.languageId) {
				if (queryParams.languageId == '1') {
					this.isTitleEnglist = false;
				} else {
					this.isTitleEnglist = true;
				}
			}

			const opts = new InputRequestOption();
			opts.params = defaultParams;
			this.getCategories(this.search.languageId);
			this.fetchArticle(opts);
		});
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

	changeCategory(e) {
		this.search.categoryId = e;
	}

	changeLanguage(e) {
		this.search.categoryId = '0';
		this.search.languageId = e;
		if (e == 1) {
			this.isTitleEnglist = false;
		} else {
			this.isTitleEnglist = true;
		}
		this.getCategories(e);
	}

	keywordChange(e) {
		if (this.search.keywords == '') {
			this.search.keywords = null;
		}
	}

	fetchArticle(opts?) {
		this.crudSvc.get(APIConfig.Article.Gets, opts).subscribe((response) => {
			this.articles = response.data.items;
			this.totalItems = response.data.total;
		});
	}

	filterArticle() {
		this.pagination.page = 1;
		let filterParams = {
			languageId: this.search.languageId,
			categoryId: this.search.categoryId,
			text: this.search.keywords,
			page: this.pagination.page,
		};
		this.router.navigate([], {
			relativeTo: this.activatedRoute,
			queryParams: filterParams,
			queryParamsHandling: 'merge',
		});
		this.fetchArticle();
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
					this.router.navigate([]);
					this.toastrSvc.success(response.message);
				} else {
					this.toastrSvc.error(response.message);
				}
			});
	}
}
