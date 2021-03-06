import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BannerModel } from 'src/app/_core/models/banner.model';
import { InputRequestOption } from 'src/app/_core/services/http.service';
import { APIConfig } from 'src/app/_core/API-config';
import { LanguageModel } from 'src/app/_core/models/language';
import { CategoryModel } from 'src/app/_core/models/category.model';
import { ToastrService } from 'ngx-toastr';
import { CrudService } from 'src/app/_core/services/crud.service';
import { TemplateModel } from 'src/app/_core/models/template.model';
import { TemplatesConfig } from 'src/app/_core/templates-config';
import { FormControl } from '@angular/forms';

@Component({
	selector: 'app-add-edit',
	templateUrl: './add-edit.component.html',
	styleUrls: ['./add-edit.component.scss'],
})
export class AddEditComponent implements OnInit {
	@Input('banner') banner: BannerModel = new BannerModel();
	@Input('isEdit') isEdit: boolean;
	@Output('close') close: EventEmitter<boolean> = new EventEmitter<boolean>();
	languages: Array<LanguageModel>;
	categories: Array<CategoryModel>;
	templates: Array<TemplateModel> = TemplatesConfig;
	languageControl = new FormControl();
	isShowUpload: boolean = false;

	resourcePathError = false;

	constructor(
		private crudSvc: CrudService,
		private toastrSvc: ToastrService
	) {}

	ngOnInit(): void {
		this.languages = JSON.parse(localStorage.getItem('languages'));
	}

	addBanner() {
		this.banner.languageId = Number(this.banner.languageId);
		if (
			this.banner.resourcePath == '' ||
			this.banner.resourcePath == null
		) {
			this.resourcePathError = true;
		} else {
			this.resourcePathError = false;
			const params = new InputRequestOption();
			params.body = this.banner;
			this.crudSvc
				.add(APIConfig.Banner.Add, params)
				.subscribe((response) => {
					this.close.emit(false);
					if (response.code == 200) {
						this.toastrSvc.success(response.message);
					} else {
						this.toastrSvc.error(response.message);
					}
				});
		}
	}

	updateBanner() {
		this.banner.languageId = Number(this.banner.languageId);
		if (
			this.banner.resourcePath == '' ||
			this.banner.resourcePath == null
		) {
			this.resourcePathError = true;
		} else {
			this.resourcePathError = false;
			this.banner.languageId = Number(this.banner.languageId);
			const params = new InputRequestOption();
			params.body = this.banner;
			this.crudSvc
				.update(APIConfig.Banner.Update, params)
				.subscribe((response) => {
					this.close.emit(false);
					if (response.code == 200) {
						this.toastrSvc.success(response.message);
					} else {
						this.toastrSvc.error(response.message);
					}
				});
		}
	}

	closePopup(status) {
		this.close.emit(status);
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
