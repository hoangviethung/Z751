import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MenuModel } from 'src/app/_core/models/menu.model';
import { LanguageModel } from 'src/app/_core/models/language';
import {
	InputRequestOption,
	HttpService,
} from 'src/app/_core/services/http.service';
import { APIConfig } from 'src/app/_core/API-config';
import { ToastrService } from 'ngx-toastr';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { TemplateModel } from 'src/app/_core/models/template.model';
import { TemplatesConfig } from 'src/app/_core/templates-config';
import { FormControl } from '@angular/forms';
export enum Menu {
	main = 0,
	footer = 1,
	website_relative = 2,
}

@Component({
	selector: 'app-add-edit',
	templateUrl: './add-edit.component.html',
	styleUrls: ['./add-edit.component.scss'],
})
export class AddEditComponent implements OnInit {
	@Input('menu') menu: MenuModel = new MenuModel();
	@Input('isEdit') isEdit: boolean;
	@Output('close') close: EventEmitter<boolean> = new EventEmitter<boolean>();
	languages: Array<LanguageModel>;
	menus: Array<MenuModel>;
	originUrl: string;
	templates: Array<TemplateModel> = TemplatesConfig;
	languageControl = new FormControl();
	menuControl = new FormControl();
	typeMenuControl = new FormControl();
	isShowUpload: boolean = false;
	menuTitleError = false;

	constructor(
		private httpSvc: HttpService,
		private toastrSvc: ToastrService,
		private activatedRoute: ActivatedRoute
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
			.pipe(
				map((response) => {
					const baseMenu: MenuModel = new MenuModel();
					let newMenus = response.data;
					baseMenu.id = 0;
					if (languageId == 1) {
						baseMenu.title = 'Menu gốc';
					} else {
						baseMenu.title = 'Root Menu';
					}
					newMenus.unshift(baseMenu);
					if (this.menu.parentId == null) {
						this.menu.parentId = 0;
					}
					return newMenus;
				})
			)
			.subscribe((menus) => {
				this.menus = menus;
			});
	}

	closePopup(status) {
		this.close.emit(status);
	}

	addMenu() {
		if (this.menu.title == '' || this.menu.title == null) {
			this.menuTitleError = true;
		} else {
			this.menuTitleError = false;

			this.activatedRoute.params.subscribe((paramsTypeMenu) => {
				const typeMenu = Menu[paramsTypeMenu.menuTitle];
				this.menu.typeId = Number(typeMenu);
			});

			const params = new InputRequestOption();
			params.body = this.menu;
			const add = this.httpSvc
				.post(APIConfig.Menu.Add, params)
				.subscribe((response) => {
					if (response.code == 200) {
						add.unsubscribe();
						this.close.emit(false);
						this.toastrSvc.success(response.message);
					} else {
						this.toastrSvc.error(response.message);
					}
				});
		}
	}

	updateMenu() {
		if (this.menu.title == '' || this.menu.title == null) {
			this.menuTitleError = true;
		} else {
			this.menuTitleError = false;

			const params = new InputRequestOption();
			params.body = this.menu;
			this.activatedRoute.params.subscribe((params) => {
				const typeMenu = Menu[params.menuTitle];
				this.menu.typeId = Number(typeMenu);
			});
			this.httpSvc
				.post(APIConfig.Menu.Update, params)
				.subscribe((response) => {
					if (response.code === 200) {
						this.close.emit(false);
						this.toastrSvc.success(response.message);
					} else {
						this.toastrSvc.error(response.message);
					}
				});
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

	onChangeLanguge(e) {
		this.activatedRoute.params.subscribe((params) => {
			const typeMenu = Menu[params.menuTitle];
			this.getMenus(typeMenu, e);
		});
	}
}
