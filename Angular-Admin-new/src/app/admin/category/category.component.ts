import { Component, OnInit } from '@angular/core';
import { CategoryModel } from 'src/app/_core/models/category.model';
import {
	HttpService,
	InputRequestOption,
} from 'src/app/_core/services/http.service';
import { APIConfig } from 'src/app/_core/API-config';
import { FilterSearchModel } from 'src/app/_core/models/filter.model';
import { LanguageModel } from 'src/app/_core/models/language';
import { UtilService } from 'src/app/_core/services/util.service';
import { ToastrService } from 'ngx-toastr';
import { CrudService } from 'src/app/_core/services/crud.service';
import { TemplateModel } from 'src/app/_core/models/template.model';
import { TemplatesConfig } from 'src/app/_core/templates-config';
import { FormControl } from '@angular/forms';
@Component({
	selector: 'app-category',
	templateUrl: './category.component.html',
	styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
	isShowPopup: boolean = false;
	category: CategoryModel;
	isEdit: boolean;
	categories: Array<CategoryModel>;
	languages: Array<LanguageModel>;
	search: FilterSearchModel = new FilterSearchModel();
	templates: Array<TemplateModel> = TemplatesConfig;
	languageControl = new FormControl();
	constructor(
		private crudSvc: CrudService,
		private utilSvc: UtilService,
		private toastrSvc: ToastrService
	) {}

	ngOnInit(): void {
		this.languages = this.utilSvc.getLanguages();
		this.getCategories();
	}

	getCategories(e?) {
		const options = new InputRequestOption();
		if (e) {
			options.params = {
				languageId: e,
			};
		} else {
			options.params = {
				languageId: '1',
			};
		}
		this.crudSvc
			.get(APIConfig.Category.Gets, options)
			.subscribe((categories) => {
				this.categories = categories.data.items;
			});
	}

	deleteCategory(id) {
		const params = new InputRequestOption();
		params.params = {
			id: id,
		};
		console.log(1);
		
		this.crudSvc
			.delete(APIConfig.Category.Delete, params)
			.subscribe((response) => {
				if (response.code == 200) {
					this.getCategories();
					this.toastrSvc.success(response.message);
				} else {
					this.toastrSvc.error(response.message);
				}
			});
	}
}
