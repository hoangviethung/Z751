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
	productGroupCapacities: ProductGroupModel = new ProductGroupModel();
	isShowUpload: boolean = false;
	previewUrlTemp: string;

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
		this.originUrl = this.utilSvc.getOriginUrl();
		this.getProduct();
	}

	getCategories(languageId: string = '1') {
		const opts = new InputRequestOption();
		opts.params = {
			languageId: languageId,
		};
		this.crudSvc
			.get(APIConfig.Category.Gets, opts)
			.pipe(
				map((response) => {
					return response.data.items;
				})
			)
			.subscribe((categories) => {
				this.categories = categories;
				this.categories = this.categories.filter((item) => {
					if (item.parentName != null) {
						item.parentName += ' >> ';
					} else {
						item.parentName = '';
					}
					return item;
				});
				if (this.isEdit == false) {
					this.product.categoryId = this.categories[0].id;
				}
				this.updateBaseUrl(this.product.categoryId);
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
						this.getCategories(this.product.languageId.toString());
						this.getProductGroupsCapacities();
					});
			} else {
				this.isEdit = false;
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

	updateBaseUrl(e) {
		const item = this.categories.find((item, index) => {
			if (item.id == e) {
				return item;
			}
		});
		this.previewUrlTemp = item.previewUrl;
		if (this.previewUrlTemp != '') {
			this.previewUrlTemp += '/';
		}
	}

	updateProduct(method: string) {
		this.product.languageId = Number(this.product.languageId);
		this.product.order = moment(this.product.order).format();

		for (const key of Object.keys(this.product)) {
			if (this.product[key] != null) {
				if (String(this.product[key]).length <= 0) {
					// this.product[key] = null;
					delete this.product[key];
				}
			} else {
				delete this.product[key];
			}
		}
		const params = new InputRequestOption();
		params.body = this.product;

		this.crudSvc
			.add(APIConfig.Product[method], params)
			.subscribe((response) => {
				if (response.code == 200) {
					if (method == 'Update') {
						this.toastrSvc.success(
							'Chỉnh sửa sản phẩm thành công !!!'
						);
					} else {
						this.toastrSvc.success(
							'Thêm mới sản phẩm thành công !!!'
						);
					}
					this.router.navigate(['/admin/products']);
				} else {
					if (method == 'Update') {
						this.toastrSvc.error(
							'Đã có lỗi xẩy ra khi chỉnh sửa !!!'
						);
					} else {
						this.toastrSvc.error(
							'Đã có lỗi xẩy ra khi thêm mới !!!'
						);
					}
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

	onChangeLanguage(e) {
		this.getCategories(e);
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
