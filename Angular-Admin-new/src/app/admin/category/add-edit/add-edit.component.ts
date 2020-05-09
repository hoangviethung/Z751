import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { CategoryModel } from 'src/app/_core/models/category.model';
import { LanguageModel } from 'src/app/_core/models/language';
import { InputRequestOption, HttpService } from 'src/app/_core/services/http.service';
import { APIConfig } from 'src/app/_core/API-config';
import { TemplatesConfig } from 'src/app/_core/templates-config';
import { UtilService } from 'src/app/_core/services/util.service';
import { TemplateModel } from 'src/app/_core/models/template.model';

@Component({
	selector: 'app-add-edit',
	templateUrl: './add-edit.component.html',
	styleUrls: ['./add-edit.component.scss']
})
export class AddEditComponent implements OnInit {
	@Input('category') category: CategoryModel = new CategoryModel();
	@Input('categories') categories: Array<CategoryModel>
	@Input('isEdit') isEdit: boolean;
	@Output('close') close: EventEmitter<boolean> = new EventEmitter<boolean>();
	languages: Array<LanguageModel>;
	templates: Array<TemplateModel> = TemplatesConfig
	originUrl: string;
	constructor(
		private httpSvc: HttpService,
		private utilSvc: UtilService,
	) { }

	ngOnInit(): void {
		this.languages = JSON.parse(localStorage.getItem('languages'))
		this.setBaseUrl();
		this.addRootCaetegory();
	}


	setBaseUrl() {
		this.originUrl = this.utilSvc.getOriginUrl()
	}

	updateBaseUrl() {
		const parentId = Number(this.category.parentId)

		const item = this.categories.find((item) => {
			if (parentId == item.id) {
				return item
			}
		})
		this.originUrl = this.utilSvc.getOriginUrl(item.seName)
	}

	setAliasTitleToUrl() {
		this.category.seName = this.utilSvc.alias(this.category.title)
	}

	addCategory() {
		this.category.languageId = Number(this.category.languageId)
		const params = new InputRequestOption();
		params.body = this.category
		this.httpSvc.post(APIConfig.Category.Add, params)
			.subscribe(() => {
				this.close.emit(false)
			})
	}

	updateCategory() {
		this.category.languageId = Number(this.category.languageId)
		const params = new InputRequestOption();
		params.body = this.category
		this.httpSvc.post(APIConfig.Category.Update, params)
			.subscribe(() => {
				this.close.emit(false)
				console.log('Cập nhật thành công');
			})
	}

	closePopup(status) {
		this.close.emit(status)
	}

	addRootCaetegory() {
		const baseCategory: CategoryModel = new CategoryModel()
		baseCategory.previewUrl = ''
		baseCategory.id = 0
		baseCategory.title = 'Danh mục gốc'
		this.categories.unshift(baseCategory)
		if (this.category.parentId == null) {
			this.category.parentId = 0
		}
		this.updateBaseUrl()
	}

	onChangeEmitter(content) {
		this.category.description = content.editor.getData()
	}
}
