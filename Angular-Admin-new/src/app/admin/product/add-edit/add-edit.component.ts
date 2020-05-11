import { Component, OnInit } from '@angular/core';
import { InputRequestOption } from 'src/app/_core/services/http.service';
import { LanguageModel } from 'src/app/_core/models/language';
import { APIConfig } from 'src/app/_core/API-config';
import { CategoryModel } from 'src/app/_core/models/category.model';
import { UtilService } from 'src/app/_core/services/util.service';
import { ToastrService } from 'ngx-toastr';
import { CrudService } from 'src/app/_core/services/crud.service';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { ProductModel } from 'src/app/_core/models/product.model';

@Component({
	selector: 'app-add-edit',
	templateUrl: './add-edit.component.html',
	styleUrls: ['./add-edit.component.scss'],
})
export class AddEditComponent implements OnInit {
	isEdit: boolean = false;
	languages: Array<LanguageModel>;
	product: ProductModel = new ProductModel();
	categories: Array<CategoryModel>;
	originUrl: string;

	constructor(
		private crudSvc: CrudService,
		private utilSvc: UtilService,
		private toastrSvc: ToastrService,
		private activatedRoute: ActivatedRoute,
		private router: Router
	) {}

	ngOnInit(): void {
		this.getProduct();
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
			});
	}

	getProduct() {
		this.activatedRoute.params.subscribe((params) => {
			if (params.ProductId) {
				this.isEdit = true;
				const options = new InputRequestOption();
				options.params = {
					id: params.ProductId,
				};
				this.crudSvc
					.get(APIConfig.Product.Get, options)
					.subscribe((response) => {
						console.log(response);

						this.product = response.data;
						// this.getCategories(this.product.languageId.toString());
					});
			} else {
				this.isEdit = false;
				// this.setBaseUrl();
				// this.getCategories();
			}
		});
	}

	setBaseUrl() {
		this.originUrl = this.utilSvc.getOriginUrl();
	}

	updateCategory() {}

	addCategory() {}

	onChangeEmitter(content) {
		this.product.description = content.editor.getData();
	}
}
