import { Component, OnInit } from '@angular/core';
import { ArticleModel } from 'src/app/_core/models/article.model';
import { LanguageModel } from 'src/app/_core/models/language';
import { InputRequestOption } from 'src/app/_core/services/http.service';
import { APIConfig } from 'src/app/_core/API-config';
import { CategoryModel } from 'src/app/_core/models/category.model';
import { UtilService } from 'src/app/_core/services/util.service';
import { ToastrService } from 'ngx-toastr';
import { CrudService } from 'src/app/_core/services/crud.service';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
	selector: 'app-add-edit',
	templateUrl: './add-edit.component.html',
	styleUrls: ['./add-edit.component.scss'],
})
export class AddEditComponent implements OnInit {
	article: ArticleModel = new ArticleModel();
	languages: Array<LanguageModel>;
	categories: Array<CategoryModel>;
	isEdit: boolean;
	originUrl: string;
	constructor(
		private crudSvc: CrudService,
		private utilSvc: UtilService,
		private toastrSvc: ToastrService,
		private activatedRoute: ActivatedRoute,
		private router: Router
	) {}

	ngOnInit(): void {
		this.getArticle();
		this.languages = this.utilSvc.getLanguages();
	}

	getCategories(languageId: string = '1') {
		const params = new InputRequestOption();
		params.params = {
			languageId: languageId,
		};
		this.crudSvc
			.get(APIConfig.Category.Gets, params)
			.pipe(
				map((response) => {
					return response.data.items;
				})
			)
			.subscribe((categories) => {
				this.categories = categories;
				this.updateBaseUrl();
			});
	}

	getArticle() {
		this.activatedRoute.params.subscribe((params) => {
			if (params.ArticleId) {
				this.isEdit = true;
				const options = new InputRequestOption();
				options.params = {
					id: params.ArticleId,
				};
				this.crudSvc
					.get(APIConfig.Article.Get, options)
					.pipe(map((response) => response.data))
					.subscribe((article) => {
						this.article = article;
						this.getCategories(this.article.languageId.toString());
					});
			} else {
				this.isEdit = false;
				this.setBaseUrl();
				this.getCategories();
			}
		});
	}

	setBaseUrl() {
		this.originUrl = this.utilSvc.getOriginUrl();
	}

	updateBaseUrl() {
		const categoryId = Number(this.article.categoryId);
		const item = this.categories.find((item) => {
			if (categoryId == item.id) {
				return item;
			}
		});
		if (item) {
			this.originUrl = this.utilSvc.getOriginUrl(item.seName);
		}
	}

	setAliasTitleToUrl() {
		this.article.seName = this.utilSvc.alias(this.article.title);
	}

	addArticle() {
		this.article.languageId = Number(this.article.languageId);
		const params = new InputRequestOption();
		params.body = this.article;
		this.crudSvc
			.add(APIConfig.Article.Add, params)
			.subscribe((response) => {
				if (response.code == 200) {
					this.toastrSvc.success(response.message);
				} else {
					this.toastrSvc.error(response.message);
				}
			});
	}

	updateArticle() {
		this.article.languageId = Number(this.article.languageId);
		const params = new InputRequestOption();
		params.body = this.article;
		this.crudSvc
			.update(APIConfig.Article.Update, params)
			.subscribe((response) => {
				if (response.code == 200) {
					this.toastrSvc.success(response.message);
				} else {
					this.toastrSvc.error(response.message);
				}
				this.router.navigate(['/admin/article']);
			});
	}

	onChangeEmitter(content) {
		this.article.description = content.editor.getData();
	}
}
