import { Component, OnInit, Inject } from '@angular/core';
import { CategoryModel } from 'src/app/_core/models/category.model';
import { LanguageModel } from 'src/app/_core/models/language';
import {
	InputRequestOption,
	HttpService,
} from 'src/app/_core/services/http.service';
import { APIConfig } from 'src/app/_core/API-config';
import { TemplatesConfig } from 'src/app/_core/templates-config';
import { UtilService } from 'src/app/_core/services/util.service';
import { TemplateModel } from 'src/app/_core/models/template.model';
import { CrudService } from 'src/app/_core/services/crud.service';
import { map } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormControl } from '@angular/forms';
import { ProductGroupModel } from 'src/app/_core/models/product-groups';
import { AdminComponent } from '../../admin.component';
import { DOCUMENT } from '@angular/common';
@Component({
	selector: 'app-add-edit',
	templateUrl: './add-edit.component.html',
	styleUrls: ['./add-edit.component.scss'],
})
export class AddEditComponent implements OnInit {
	templates: Array<TemplateModel> = TemplatesConfig;
	productGroupsControl: FormControl = new FormControl();
	templatesControl = new FormControl();
	languageControl = new FormControl();
	categoryControl = new FormControl();
	category: CategoryModel = new CategoryModel();
	languages: Array<LanguageModel>;
	categories: Array<CategoryModel> = [];
	isEdit: boolean;
	isTemplateEnglist: boolean;
	isShowPopupUpload: boolean;
	originUrl: string;
	isShowProductGroup: boolean = false;
	productGroups: Array<ProductGroupModel>;
	categoryProductGroups: Array<number> = [];
	categoryProductGroupsChecked: Array<ProductGroupModel>;
	isShowUpload: boolean = false;
	constructor(
		private crudSvc: CrudService,
		private utilSvc: UtilService,
		private httpSvc: HttpService,
		private activatedRoute: ActivatedRoute,
		private toastrSvc: ToastrService,
		private router: Router,
		@Inject(DOCUMENT) private document: Document
	) {}

	ngOnInit(): void {
		this.languages = this.utilSvc.getLanguages();
		this.getProductGroups();
		this.getCategory();
	}

	getProductGroups() {
		const opts = new InputRequestOption();
		opts.params = {
			languageId: this.category.languageId.toString(),
		};
		this.crudSvc
			.get(APIConfig.ProductGroup.Gets, opts)
			.subscribe((response) => {
				this.productGroups = response.data;
			});
	}

	getCategories(languageId) {
		const params = new InputRequestOption();
		params.params = {
			languageId: languageId,
		};
		this.crudSvc
			.get(APIConfig.Category.Gets, params)
			.pipe(
				map((response) => {
					const baseCategory: CategoryModel = new CategoryModel();
					let newCategory = response.data.items;
					baseCategory.previewUrl = '';
					baseCategory.id = 0;
					if (languageId == '1') {
						baseCategory.title = 'Danh mục gốc';
					} else {
						baseCategory.title = 'Root directory';
					}
					newCategory.unshift(baseCategory);
					if (this.category.parentId == null) {
						this.category.parentId = 0;
					}
					return newCategory;
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
			});
	}

	getCategory() {
		this.activatedRoute.params.subscribe((params) => {
			if (params.CategoryId) {
				this.isEdit = true;
				const opts1 = new InputRequestOption();
				opts1.params = {
					id: params.CategoryId,
				};
				this.crudSvc
					.get(APIConfig.Category.Get, opts1)
					.subscribe((response) => {
						this.category = response.data;
						this.setBaseUrl();
						this.getCategories(this.category.languageId.toString());
						this.showProductGroups(this.category.template);
						const opts2 = new InputRequestOption();
						opts2.params = {
							url: this.category.seName,
						};
						this.crudSvc
							.get(APIConfig.ProductGroup.UsedGet, opts2)
							.subscribe((response) => {
								const productGroupsSelected = [];
								for (
									let i = 0;
									i < this.productGroups.length;
									i++
								) {
									if (response.data != null) {
										for (
											let j = 0;
											j < response.data.length;
											j++
										) {
											console.log(this.productGroups[i]);
											if (
												response.data[j].id ==
												this.productGroups[i].id
											) {
												productGroupsSelected.push(
													this.productGroups[i]
												);
											}
										}
									}
								}
								this.productGroupsControl.setValue(
									productGroupsSelected
								);
							});

						// NEW
						const categoryId = new InputRequestOption();
						categoryId.params = {
							url: this.category.seName,
						};
						this.httpSvc
							.get(
								APIConfig.ProductGroup.GetItemsChecked,
								categoryId
							)
							.pipe(map((response) => response.data))
							.subscribe((itemsChecked) => {
								this.categoryProductGroupsChecked = itemsChecked;
							});
					});
			} else {
				this.isEdit = false;
				this.setBaseUrl();
				this.getCategories('1');
				this.showProductGroups(1);
			}
		});
	}

	setBaseUrl() {
		this.originUrl = this.utilSvc.getOriginUrl();
	}

	updateBaseUrl() {
		const categoryId = Number(this.category.parentId);
		const item = this.categories.find((item) => {
			if (item.id == categoryId) {
				return item;
			}
		});
		if (item) {
			this.originUrl = this.utilSvc.getOriginUrl(item.seName);
		}
	}

	setAliasTitleToUrl() {
		this.category.seName = this.utilSvc.alias(this.category.title);
	}

	showProductGroups(template) {
		const item = this.templates.find((item) => {
			if (item.id == template) {
				return item;
			}
		});
		if (item.haveList == true) {
			this.isShowProductGroup = true;
		} else {
			this.isShowProductGroup = false;
		}
	}

	addCategory() {
		this.category.languageId = Number(this.category.languageId);
		const params = new InputRequestOption();
		params.body = this.category;
		this.crudSvc
			.add(APIConfig.Category.Add, params)
			.subscribe((response) => {
				if (response.code == 200) {
					this.toastrSvc.success(response.message);
					this.router.navigate(['/admin/category']);
				} else {
					this.toastrSvc.error(response.message);
				}
			});
	}

	updateCategory() {
		this.category.languageId = Number(this.category.languageId);
		const params = new InputRequestOption();
		params.body = this.category;
		this.crudSvc
			.update(APIConfig.Category.Update, params)
			.subscribe((response) => {
				if (response.code == 200) {
					if (this.isShowProductGroup) {
						const categoryProducGroupsOpts = new InputRequestOption();
						categoryProducGroupsOpts.body = {
							categoryId: this.category.id,
							productGroupIds: this.categoryProductGroups,
						};
						this.crudSvc
							.update(
								APIConfig.ProductGroup.CategoryUpdate,
								categoryProducGroupsOpts
							)
							.subscribe((response) => {
								if (response.code == 200) {
									this.toastrSvc.success(
										'Thay đổi nhóm sản phẩm thành công'
									);
									this.router.navigate(['/admin/category']);
								}
							});
					}
					this.toastrSvc.success(response.message);
					this.router.navigate(['/admin/category']);
				} else {
					this.toastrSvc.error(response.message);
				}
			});
	}

	onChangeEmitter(content) {
		this.category.description = content.editor.getData();
	}

	updateCategoryProductsGroups() {
		this.categoryProductGroups = this.productGroupsControl.value.map(
			(item) => item.id
		);
	}

	onChangeLanguage(e) {
		this.getCategories(e);
		this.getProductGroups();
		if (e == 2) {
			this.isTemplateEnglist = true;
		} else {
			this.isTemplateEnglist = false;
		}
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
