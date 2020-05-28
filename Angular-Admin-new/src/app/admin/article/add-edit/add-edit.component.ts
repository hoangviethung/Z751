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
import { TemplateModel } from 'src/app/_core/models/template.model';
import { TemplatesConfig } from 'src/app/_core/templates-config';
import * as moment from 'moment';
import { ArticleService } from '../article.service';

@Component({
	selector: 'app-add-edit',
	templateUrl: './add-edit.component.html',
	styleUrls: ['./add-edit.component.scss'],
})
export class AddEditComponent implements OnInit {
	article: ArticleModel = new ArticleModel();
	languages: Array<LanguageModel>;
	categories: Array<CategoryModel> = [];
	isEdit: boolean;
	originUrl: string;
	templates: Array<TemplateModel> = TemplatesConfig;
	isShowUpload: boolean = false;
	previewUrlTemp: string;
	constructor(
		private crudSvc: CrudService,
		private utilSvc: UtilService,
		private toastrSvc: ToastrService,
		private activatedRoute: ActivatedRoute,
		private router: Router,
		private articleSvc: ArticleService
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
				if (this.isEdit == false) {
					this.article.categoryId = this.categories[0].id;
				}
				this.categories = categories;
				this.categories.forEach((item) => {
					if (item.parentName == null) {
						item.parentName = '';
					} else {
						item.parentName += ' >> ';
					}
				});
				this.updateBaseUrl(this.article.categoryId);
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
				this.getCategories();
			}
		});
	}


	updateBaseUrl(e) {
		const item = this.categories.find((item, index) => {
			if (item.id == e) {
				console.log(item);
				return item;
			}
		});
		this.previewUrlTemp = item.previewUrl;
		if (this.previewUrlTemp != '') {
			this.previewUrlTemp += '/';
		}
	}

	setAliasTitleToUrl() {
		this.article.seName = this.utilSvc.alias(this.article.title);
	}

	onChangeLanguage(e) {
		this.getCategories(e);
		this.articleSvc.setLanguage(e);
	}

	addArticle() {
		this.article.languageId = Number(this.article.languageId);
		this.article.categoryId = Number(this.article.categoryId);

		if (!this.article.order) {
			this.article.order = new Date().toString();
		}

		for (const key of Object.keys(this.article)) {
			if (this.article[key] != null) {
				if (String(this.article[key]).length <= 0) {
					this.article[key] = null;
				}
			}
		}

		const params = new InputRequestOption();
		params.body = this.article;

		this.crudSvc
			.add(APIConfig.Article.Add, params)
			.subscribe((response) => {
				if (response.code == 200) {
					this.router.navigate(['/admin/article']);
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
					this.router.navigate(['/admin/article']);
					this.toastrSvc.success(response.message);
				} else {
					this.toastrSvc.error(response.message);
				}
			});
	}

	onDescriptionChangeEmitter(content) {
		this.article.description = content.editor.getData();
	}

	onContentChangeEmitter(content) {
		this.article.content = content.editor.getData();
	}

	onDateChangeEmitter(e) {
		this.article.order = moment(e).format();
	}

	isShowPopupUploadfile(isShow: boolean) {
		if (isShow == true) {
			this.isShowUpload = true;
			document.querySelector('.block-content').classList.add('disabled');
		} else {
			this.isShowUpload = false;
			document
				.querySelector('.block-content')
				.classList.remove('disabled');
		}
	}
}
