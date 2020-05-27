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
import { PaginationModel } from 'src/app/_core/models/pagination';
import { ActivatedRoute } from '@angular/router';
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
	pagination: PaginationModel = new PaginationModel(10, 1);
	totalItems: number;
	page: number;
	constructor(
		private crudSvc: CrudService,
		private utilSvc: UtilService,
		private toastrSvc: ToastrService,
		private activatedRoute: ActivatedRoute
	) {}

	ngOnInit(): void {
		this.languages = this.utilSvc.getLanguages();
		this.activatedRoute.queryParams.subscribe((queryParams) => {
			if (queryParams.page) {
				this.page = queryParams.page;
			} else {
				this.page = 1;
			}
			const opts = new InputRequestOption();
			opts.params = {
				languageId: this.search.languageId,
				itemPerPage: this.pagination.itemPerPage.toString(),
				page: queryParams.page || this.pagination.page.toString(),
				text: this.search.keywords || '',
			};
			this.fetchCategories(opts);
		});
	}

	fetchCategories(opts) {
		this.crudSvc
			.get(APIConfig.Category.Gets, opts)
			.subscribe((response) => {
				this.categories = response.data.items;
				this.totalItems = response.data.total;
			});
	}

	deleteCategory(id) {
		const params = new InputRequestOption();
		params.params = {
			id: id,
		};
		this.crudSvc
			.delete(APIConfig.Category.Delete, params)
			.subscribe((response) => {
				if (response.code == 200) {
					const opts = new InputRequestOption();
					opts.params = {
						languageId: this.search.languageId,
						itemPerPage: this.pagination.itemPerPage.toString(),
						page: this.pagination.page.toString(),
						text: this.search.keywords || '',
					};
					this.fetchCategories(opts);
					this.toastrSvc.success(response.message);
				} else {
					this.toastrSvc.error(response.message);
				}
			});
	}

	paginateCategory(page) {
		const opts = new InputRequestOption();
		opts.params = {
			languageId: this.search.languageId,
			page: page,
			itemPerPage: this.pagination.itemPerPage.toString(),
			text: this.search.keywords || '',
		};
	}

	changeValue(e) {
		const opts = new InputRequestOption();
		opts.params = {
			languageId: this.search.languageId,
			page: this.pagination.page.toString(),
			itemPerPage: this.pagination.itemPerPage.toString(),
			text: this.search.keywords || '',
		};
		this.fetchCategories(opts);
	}
}
