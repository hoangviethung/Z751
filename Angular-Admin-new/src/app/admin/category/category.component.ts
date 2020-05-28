import { Component, OnInit } from '@angular/core';
import { CategoryModel } from 'src/app/_core/models/category.model';
import { InputRequestOption } from 'src/app/_core/services/http.service';
import { APIConfig } from 'src/app/_core/API-config';
import { FilterSearchModel } from 'src/app/_core/models/filter.model';
import { LanguageModel } from 'src/app/_core/models/language';
import { UtilService } from 'src/app/_core/services/util.service';
import { ToastrService } from 'ngx-toastr';
import { CrudService } from 'src/app/_core/services/crud.service';
import { PaginationModel } from 'src/app/_core/models/pagination';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'app-category',
	templateUrl: './category.component.html',
	styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
	category: CategoryModel;
	categories: Array<CategoryModel>;
	languages: Array<LanguageModel>;
	search: FilterSearchModel = new FilterSearchModel();
	pagination: PaginationModel = new PaginationModel(10, 1);
	totalItems: number;
	page: number;
	isTitleEnglist: boolean;

	constructor(
		private crudSvc: CrudService,
		private utilSvc: UtilService,
		private toastrSvc: ToastrService,
		private activatedRoute: ActivatedRoute,
		private router: Router
	) {}

	ngOnInit(): void {
		this.languages = this.utilSvc.getLanguages();
		this.fetchCategories();
	}

	fetchCategories() {
		this.activatedRoute.queryParams.subscribe((queryParams) => {
			const defaultParams = {
				languageId: this.search.languageId,
				page: this.pagination.page.toString(),
				itemPerPage: this.pagination.itemPerPage.toString(),
			};
			for (const key in queryParams) {
				if (queryParams.hasOwnProperty(key)) {
					defaultParams[key] = queryParams[key];
				}
				if (key == 'languageId') {
					this.search[key] = queryParams[key];
				}
			}
			if (queryParams.page) {
				this.pagination.page = queryParams.page;
			}
			const opts = new InputRequestOption();
			opts.params = defaultParams;
			this.crudSvc
				.get(APIConfig.Category.Gets, opts)
				.subscribe((response) => {
					this.categories = response.data.items;
					this.totalItems = response.data.total;
				});
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
					this.pagination.page = 1;
					let filterParams = {
						languageId: this.search.languageId,
						page: this.pagination.page,
					};
					this.router
						.navigate([], {
							relativeTo: this.activatedRoute,
							queryParams: filterParams,
							queryParamsHandling: 'merge',
						})
						.then(() => {
							this.fetchCategories();
							this.toastrSvc.success(response.message);
						});
				} else {
					this.toastrSvc.error(response.message);
				}
			});
	}

	changeLanguage(e) {
		let filterParams = {
			languageId: e,
			page: null,
		};
		this.pagination.page = 1;
		this.router
			.navigate([], {
				relativeTo: this.activatedRoute,
				queryParams: filterParams,
				queryParamsHandling: 'merge',
			})
			.then(() => {
				this.fetchCategories();
			});
	}
}
