import { Component, Injector, OnInit } from '@angular/core';
import {
	HttpService,
	InputRequestOption,
} from 'src/app/_core/services/http.service';
import { APIConfig } from 'src/app/_core/API-config';
import { map } from 'rxjs/operators';
import { MenuModel } from 'src/app/_core/models/menu.model';
import { ActivatedRoute } from '@angular/router';
import { LanguageModel } from 'src/app/_core/models/language';
import { CategoryModel } from 'src/app/_core/models/category.model';
import { ToastrService } from 'ngx-toastr';
import { TemplateModel } from 'src/app/_core/models/template.model';
import { TemplatesConfig } from 'src/app/_core/templates-config';
import { FormControl } from '@angular/forms';
import { Permissions } from '../../_core/enums/role.enum';
import { AuthenticationComponent } from '../../_core/components/base/authentication.component';
import { FilterSearchModel } from 'src/app/_core/models/filter.model';
export enum Menu {
	main = 0,
	footer = 1,
	website_relative = 2,
}

@Component({
	selector: 'app-menu',
	templateUrl: './menu.component.html',
	styleUrls: ['./menu.component.scss'],
})
export class MenuComponent extends AuthenticationComponent implements OnInit {
	public featureName: string = 'ManageMenu';
	public permissions = Permissions;

	menus: Array<MenuModel>;
	menu: MenuModel;
	isShowPopup: boolean = false;
	isEdit: boolean;
	languages: Array<LanguageModel>;
	categories: Array<CategoryModel>;
	templates: Array<TemplateModel> = TemplatesConfig;
	languageControl = new FormControl();
	typeMenu: string;
	search: FilterSearchModel = new FilterSearchModel();

	constructor(
		injector: Injector,
		private httpSvc: HttpService,
		private activatedRoute: ActivatedRoute,
		private toastrSvc: ToastrService
	) {
		super(injector);
	}

	ngOnInit(): void {
		this.isShowPopup = false;
		this.activatedRoute.params.subscribe((params) => {
			this.typeMenu = Menu[params.menuTitle];
			this.getMenus();
		});
		this.languages = JSON.parse(localStorage.getItem('languages'));
	}

	getMenus() {
		this.activatedRoute.queryParams.subscribe((queryParams) => {
			const defaultParams = {
				languageId: this.search.languageId,
				type: this.typeMenu,
			};
			for (const key in queryParams) {
				if (queryParams.hasOwnProperty(key)) {
					defaultParams[key] = queryParams[key];
				}
				if (key == 'languageId') {
					this.search[key] = queryParams[key];
				}
			}
			const opts = new InputRequestOption();
			opts.params = defaultParams;
			this.httpSvc
				.get(APIConfig.Menu.Gets, opts)
				.pipe(map((response) => response.data))
				.subscribe((menus) => {
					this.menus = menus;
					this.menus.forEach((element) => {
						this.menus.forEach((item) => {
							if (item.id == element.parentId) {
								element.parentName = item.title;
							}
						});
					});
				});
		});
	}

	deleteMenu(id) {
		const params = new InputRequestOption();
		params.params = { id: id };
		this.httpSvc
			.post(APIConfig.Menu.Delete, params)
			.subscribe((response) => {
				if (response.code === 200) {
					this.activatedRoute.params.subscribe((params) => {
						this.getMenus();
					});
					this.toastrSvc.success(response.message);
				} else {
					this.toastrSvc.error(response.message);
				}
			});
	}

	onOpenPopup(status, itemEdit?, isEdit?) {
		this.isShowPopup = status;
		if (itemEdit) {
			this.menu = itemEdit;
			this.isEdit = isEdit;
		} else {
			this.menu = new MenuModel();
			this.isEdit = false;
		}
	}

	onClosePopup(status: boolean) {
		this.isShowPopup = status;
		this.activatedRoute.params.subscribe((params) => {
			this.getMenus();
		});
	}

	changeLanguage(e) {
		let filterParams = {
			languageId: e,
		};
		this.router
			.navigate([], {
				relativeTo: this.activatedRoute,
				queryParams: filterParams,
				queryParamsHandling: 'merge',
			})
			.then(() => {
				this.getMenus();
			});
	}
}
