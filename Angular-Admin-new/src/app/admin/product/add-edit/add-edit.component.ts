import { Component, OnInit } from '@angular/core';
import {
	InputRequestOption,
	HttpService,
} from 'src/app/_core/services/http.service';
import { LanguageModel } from 'src/app/_core/models/language';
import { APIConfig } from 'src/app/_core/API-config';
import { CategoryModel } from 'src/app/_core/models/category.model';
import { UtilService } from 'src/app/_core/services/util.service';
import { ToastrService } from 'ngx-toastr';
import { CrudService } from 'src/app/_core/services/crud.service';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { ProductModel } from 'src/app/_core/models/product.model';
import { FormControl } from '@angular/forms';
import { TemplateModel } from 'src/app/_core/models/template.model';
import { TemplatesConfig } from 'src/app/_core/templates-config';
import { ProductGroupModel } from 'src/app/_core/models/product-groups';
import * as moment from 'moment';

@Component({
	selector: 'app-add-edit',
	templateUrl: './add-edit.component.html',
	styleUrls: ['./add-edit.component.scss'],
})
export class AddEditComponent implements OnInit {
	isEdit: boolean = false;
	languages: Array<LanguageModel>;
	potentials: Array<ProductGroupModel> = [];
	product: ProductModel = new ProductModel();
	categories: Array<CategoryModel> = [];
	originUrl: string;
	createdDate = new FormControl(new Date());
	templates: Array<TemplateModel> = TemplatesConfig;
	languageControl = new FormControl();
	categoryControl = new FormControl();
	productGroupCapacities: ProductGroupModel = new ProductGroupModel();
	constructor(
		private crudSvc: CrudService,
		private httpSvc: HttpService,
		private utilSvc: UtilService,
		private toastrSvc: ToastrService,
		private activatedRoute: ActivatedRoute,
		private router: Router
	) {}

	ngOnInit(): void {
		this.languages = this.utilSvc.getLanguages();
		this.getProduct();
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
				this.categories.forEach((item) => {
					if (item.parentName == null) {
						item.parentName = '';
					} else {
						item.parentName += ' >> ';
					}
				});
				this.categories = this.categories.filter((item) => {
					if (
						item.template != 1 &&
						item.template != 2 &&
						item.template != 6 &&
						item.template != 7
					) {
						return item;
					}
				});
				if (this.isEdit == false) {
					this.product.categoryId = this.categories[0].id;
				}
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
						this.product = response.data;
						this.setBaseUrl();
						this.getCategories(this.product.languageId.toString());
						this.getProductGroupsCapacities();
						console.log(this.product.order);
					});
			} else {
				this.isEdit = false;
				this.setBaseUrl();
				this.getCategories();
				this.getProductGroupsCapacities();
			}
		});
	}

	getProductGroupsCapacities() {
		const opts = new InputRequestOption();
		opts.params = {
			languageId: '1',
		};
		this.httpSvc
			.get(APIConfig.ProductGroup.Gets, opts)
			.subscribe((response) => {
				this.productGroupCapacities = response.data;
			});
	}

	setBaseUrl() {
		this.originUrl = this.utilSvc.getOriginUrl();
	}

	updateBaseUrl(id?) {
		const categoryId = Number(this.product.categoryId);
		const item = this.categories.find((item) => {
			if (categoryId == item.id) {
				return item;
			}
		});

		if (item) {
			this.originUrl = this.utilSvc.getOriginUrl(item.seName);
		}
	}

	updateProduct(method: string) {
		this.product.languageId = Number(this.product.languageId);
		this.product.order = moment(this.product.order).format();
		const params = new InputRequestOption();
		params.body = this.product;
		this.crudSvc
			.add(APIConfig.Product[method], params)
			.subscribe((response) => {
				if (response.code == 200) {
					this.toastrSvc.success(response.message);
					this.router.navigate(['/admin/products']);
				} else {
					this.toastrSvc.error(response.message);
				}
			});
	}

	setAliasTitleToUrl() {
		this.product.seName = this.utilSvc.alias(this.product.title);
	}

	onDateChangeEmitter(e) {
		this.product.order = moment(e).format();
	}

	onChangeEmitterDescription(content) {
		this.product.description = content.editor.getData();
	}

	onChangeEmitterContent(content) {
		this.product.content = content.editor.getData();
	}
	updateImages(e) {
		this.product.images = e;
	}
}
