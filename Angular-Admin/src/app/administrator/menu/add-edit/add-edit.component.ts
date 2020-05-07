import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from 'src/_core/services/crud.service';
import { ApiConfig } from 'src/_core/configs/api';
import { MenuModel } from 'src/_core/models/menu.model';
import { LanguageService } from 'src/_core/services/language.service'
import { LanguageModel } from 'src/_core/models/language';
import { CategoryModel } from 'src/_core/models/category.model';
import { UtilService } from 'src/_core/services/util.service';

export enum Menu {
	main = 0,
	footer = 1
}

@Component({
	selector: 'app-add-edit',
	templateUrl: './add-edit.component.html',
	styleUrls: ['./add-edit.component.scss']
})

export class AddEditComponent implements OnInit {
	isEdit = false;
	originUrl: string;
	languages: Array<LanguageModel>;
	menuTitle: string;
	urlBack: string = '/admin/menu/'
	menu: MenuModel = new MenuModel();
	menus: Array<MenuModel>
	categories: Array<CategoryModel>
	typeMenu: string
	language: number = 1
	constructor(
		private activatedRoute: ActivatedRoute,
		private CrudSvc: CrudService,
		private router: Router,
		private languageSvc: LanguageService,
		private utilSvc: UtilService
	) { }

	ngOnInit(): void {
		this.getLanguages();
		this.activatedRoute.params.subscribe(params => {
			this.menuTitle = params.menuTitle;
			this.urlBack += `${this.menuTitle}`;
			this.typeMenu = Menu[params.menuTitle];
			if (params.menuId) {
				console.log('Bạn đang chỉnh sửa Menu có ID => ' + params.menuId);
				this.isEdit = true
				this.CrudSvc.gets(ApiConfig.menu.gets, { type: this.typeMenu, languageId: this.language })
					.subscribe((response) => {
						console.log(response);
						response.data.forEach(element => {
							if (element.id == params.menuId) {
								this.menu = element
								console.log(this.menu);
							}
						});
					});
			} else {
				console.log('ID không tồn tại => Bạn đang thêm một Menu mới');
			}
		});
	}

	updateMenu() {
		this.menu.parentId = Number(this.menu.parentId)
		this.menu.type = Number(this.menu.type)
		this.menu.languageId = Number(this.menu.languageId)
		this.CrudSvc
			.update(ApiConfig.menu.update, this.menu)
			.subscribe(() => {
				this.router.navigateByUrl(this.urlBack)
			})
	}

	addMenu() {
		this.menu.parentId = Number(this.menu.parentId)
		this.menu.type = Number(this.menu.type)
		this.menu.languageId = Number(this.menu.languageId)
		this.CrudSvc
			.add(ApiConfig.menu.add, this.menu)
			.subscribe(() => {
				this.router.navigateByUrl(this.urlBack)
			})
	}

	getLanguages() {
		this.languageSvc.getLanguages().subscribe((languages) => {
			this.languages = languages
		})
	}

	setAliasTitleToUrl() {
		this.menu.link = this.utilSvc.alias(this.menu.title)
	}
}