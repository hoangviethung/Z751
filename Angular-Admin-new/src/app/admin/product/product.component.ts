import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/_core/services/crud.service';
import { APIConfig } from 'src/app/_core/API-config';
import { InputRequestOption } from 'src/app/_core/services/http.service';
import { LanguageModel } from 'src/app/_core/models/language';
import { UtilService } from 'src/app/_core/services/util.service';
import { FilterSearchModel } from 'src/app/_core/models/filter.model';
import { ProductModel } from 'src/app/_core/models/product.model';
import { ToastrService } from 'ngx-toastr';
import { CategoryModel } from 'src/app/_core/models/category.model';

@Component({
	selector: 'app-product',
	templateUrl: './product.component.html',
	styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
	languages: LanguageModel[] = [];
	search: FilterSearchModel = new FilterSearchModel();
	products: ProductModel[] = [];
	categories: Array<CategoryModel>;

	constructor(
		private crudSvc: CrudService,
		private utilSvc: UtilService,
		private toastrSvc: ToastrService
	) {}

	ngOnInit(): void {
		this.getCategories();
		this.getProducts();
		this.languages = this.utilSvc.getLanguages();
	}

	filterProduct() {
		const options = new InputRequestOption();

		options.params = {
			languageId: this.search.languageId,
			text: this.search.keywords || '',
			categoryId: this.search.categoryId,
		};
		this.crudSvc
			.get(APIConfig.Product.Gets, options)
			.subscribe((response) => {
				this.products = response.data.items;
			});
	}

	getProducts(e?) {
		const options = new InputRequestOption();
		if (e) {
			options.params = {
				languageId: e.target.value,
			};
		} else {
			options.params = {
				languageId: '1',
			};
		}
		this.crudSvc
			.get(APIConfig.Product.Gets, options)
			.subscribe((response) => {
				this.products = response.data.items;
			});
	}

	getCategories() {
		const params = new InputRequestOption();
		params.params = {
			languageId: '1',
		};
		this.crudSvc
			.get(APIConfig.Category.Gets, params)
			.subscribe((response) => {
				this.categories = response.data.items;
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
					this.getProducts();
					this.toastrSvc.success(response.message);
				} else {
					this.toastrSvc.error(response.message);
				}
			});
	}
}
