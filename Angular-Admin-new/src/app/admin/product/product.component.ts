import {Component, Injector, OnInit} from '@angular/core';
import { CrudService } from 'src/app/_core/services/crud.service';
import { APIConfig } from 'src/app/_core/API-config';
import { InputRequestOption } from 'src/app/_core/services/http.service';
import { LanguageModel } from 'src/app/_core/models/language';
import { UtilService } from 'src/app/_core/services/util.service';
import { FilterSearchModel } from 'src/app/_core/models/filter.model';
import { ProductModel } from 'src/app/_core/models/product.model';
import { ToastrService } from 'ngx-toastr';
import { CategoryModel } from 'src/app/_core/models/category.model';
import { ActivatedRoute, Router } from '@angular/router';
import { PaginationModel } from 'src/app/_core/models/pagination';
import {AuthenticationComponent} from "../../_core/components/base/authentication.component";
import {Permissions} from "../../_core/enums/role.enum";

@Component({
	selector: 'app-product',
	templateUrl: './product.component.html',
	styleUrls: ['./product.component.scss'],
})
export class ProductComponent extends AuthenticationComponent implements OnInit {
	public featureName: string = 'ManageProduct';
	public permissions = Permissions;

	products: ProductModel[] = [];
	languages: LanguageModel[] = [];
	search: FilterSearchModel = new FilterSearchModel();
	pagination: PaginationModel = new PaginationModel(10, 1);
	categories: Array<CategoryModel>;
	isTitleEnglist: boolean;
	totalItems: number;
	page: number;

	constructor(
		injector: Injector,
		private crudSvc: CrudService,
		private toastrSvc: ToastrService,
		private utilSvc: UtilService,
		private activatedRoute: ActivatedRoute
	) {
		super(injector);
	}

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
			this.fetchProducts(opts);
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

	filterProduct() {
		let filterParams = {
			languageId: this.search.languageId,
			categoryId: this.search.categoryId,
			text: this.search.keywords,
			page: null,
		};
		this.pagination.page = 1;
		this.router.navigate([], {
			relativeTo: this.activatedRoute,
			queryParams: filterParams,
			queryParamsHandling: 'merge',
		});
		this.fetchProducts();
	}

	fetchProducts(opts?) {
		this.crudSvc.get(APIConfig.Product.Gets, opts).subscribe((response) => {
			this.products = response.data.items;
			this.totalItems = response.data.total;
		});
	}

	deleteProduct(id: string) {
		const options = new InputRequestOption();
		options.params = {
			id: id,
		};
		this.crudSvc
			.delete(APIConfig.Product.Delete, options)
			.subscribe((response) => {
				if (response.code == 200) {
					this.pagination.page = 1;
					this.router.navigate([], {
						relativeTo: this.activatedRoute,
						queryParams: {
							languageId: null,
							categoryId: null,
							text: null,
							page: null,
						},
						queryParamsHandling: 'merge',
					});
					this.fetchProducts();
					this.toastrSvc.success(response.message);
				} else {
					this.toastrSvc.error(response.message);
				}
			});
	}
}
