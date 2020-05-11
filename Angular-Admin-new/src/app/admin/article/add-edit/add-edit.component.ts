import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ArticleModel } from 'src/app/_core/models/article.model';
import { LanguageModel } from 'src/app/_core/models/language';
import { InputRequestOption, HttpService } from 'src/app/_core/services/http.service';
import { APIConfig } from 'src/app/_core/API-config';
import { CategoryModel } from 'src/app/_core/models/category.model';
import { UtilService } from 'src/app/_core/services/util.service';

@Component({
	selector: 'app-add-edit',
	templateUrl: './add-edit.component.html',
	styleUrls: ['./add-edit.component.scss']
})
export class AddEditComponent implements OnInit {
	@Input('article') article: ArticleModel = new ArticleModel();
	@Input('isEdit') isEdit: boolean;
	originUrl: string;
	@Output('close') close: EventEmitter<boolean> = new EventEmitter<boolean>();
	languages: Array<LanguageModel>;
	categories: Array<CategoryModel>;
	constructor(
		private httpSvc: HttpService,
		private utilSvc: UtilService
	) { }

	ngOnInit(): void {
		this.setBaseUrl();
		this.getCategories();
		this.languages = JSON.parse(localStorage.getItem('languages'));
	}

	setBaseUrl() {
		this.originUrl = this.utilSvc.getOriginUrl()
	}

	updateBaseUrl() {
		const categoryId = Number(this.article.categoryId)
		const item = this.categories.find((item) => {
			if (categoryId == item.id) {
				return item
			}
		})
		this.originUrl = this.utilSvc.getOriginUrl(item.seName)
	}

	setAliasTitleToUrl() {
		this.article.seName = this.utilSvc.alias(this.article.title)
	}

	addArticle() {
		this.article.languageId = Number(this.article.languageId)
		const params = new InputRequestOption();
		params.body = this.article
		this.httpSvc.post(APIConfig.Article.Add, params)
			.subscribe(() => {
				this.close.emit(false)
			})
	}

	updateArticle() {
		this.article.languageId = Number(this.article.languageId)
		const params = new InputRequestOption();
		params.body = this.article
		this.httpSvc.post(APIConfig.Article.Update, params)
			.subscribe(() => {
				this.close.emit(false)
				console.log('Cập nhật thành công');
			})
	}

	closePopup(status) {
		this.close.emit(status)
	}

	getCategories() {
		const params = new InputRequestOption();
		params.params = {
			languageId: '1',
		}
		this.httpSvc.get(APIConfig.Category.Gets, params)
			.subscribe((categories) => {
				this.categories = categories.data.items
				this.addRootCaetegory()
			})
	}

	addRootCaetegory() {
		const baseCategory: CategoryModel = new CategoryModel()
		baseCategory.previewUrl = '';
		baseCategory.id = 0;
		baseCategory.title = 'Danh mục gốc';
		this.categories.unshift(baseCategory)
		if (this.article.categoryId == null) {
			this.article.categoryId = 0
		}
		this.updateBaseUrl()
	}

	onChangeEmitter(content) {
		this.article.description = content.editor.getData()
	}
}
