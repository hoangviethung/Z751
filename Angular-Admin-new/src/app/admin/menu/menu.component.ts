import { Component, OnInit } from '@angular/core';
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
export enum Menu {
	main = 0,
	footer = 1,
}

@Component({
	selector: 'app-menu',
	templateUrl: './menu.component.html',
	styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
	menus: Array<MenuModel>;
	menu: MenuModel;
	isShowPopup: boolean = false;
	isEdit: boolean;
	languages: Array<LanguageModel>;
	categories: Array<CategoryModel>;
	templates: Array<TemplateModel> = TemplatesConfig;
	languageControl = new FormControl();
	constructor(
		private httpSvc: HttpService,
		private activatedRoute: ActivatedRoute,
		private toastrSvc: ToastrService
	) {}

	ngOnInit(): void {
		this.activatedRoute.params.subscribe((params) => {
			const typeMenu = Menu[params.menuTitle];
			this.getMenus(typeMenu);
		});
		this.languages = JSON.parse(localStorage.getItem('languages'));
	}

	getMenus(typeMenu, languageId?) {
		const params = new InputRequestOption();
		if (languageId) {
			params.params = {
				type: typeMenu,
				languageId: languageId,
			};
		} else {
			params.params = {
				type: typeMenu,
				languageId: '1',
			};
		}
		this.httpSvc
			.get(APIConfig.Menu.Gets, params)
			.pipe(map((response) => response.data))
			.subscribe((menus) => {
				this.menus = menus;
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
						const type = Menu[params.menuTitle];
						this.getMenus(type);
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
			const type = Menu[params.menuTitle];
			this.getMenus(type);
		});
	}

	fetchMenu(e) {
		this.activatedRoute.params.subscribe((params) => {
			const type = Menu[params.menuTitle];
			this.getMenus(type, e);
		});
	}
}
