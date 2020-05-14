import { Component, OnInit } from '@angular/core';
import { APIConfig } from 'src/app/_core/API-config';
import {
	HttpService,
	InputRequestOption,
} from 'src/app/_core/services/http.service';
import { map } from 'rxjs/operators';
import { BannerModel } from 'src/app/_core/models/banner.model';
import { LanguageModel } from 'src/app/_core/models/language';
import { ToastrService } from 'ngx-toastr';
import { LanguageFlag } from 'src/app/_core/enums/general.enum';
import { CrudService } from 'src/app/_core/services/crud.service';
import { TemplateModel } from 'src/app/_core/models/template.model';
import { TemplatesConfig } from 'src/app/_core/templates-config';
import { FormControl } from '@angular/forms';
@Component({
	selector: 'app-banner',
	templateUrl: './banner.component.html',
	styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit {
	banners: Array<BannerModel>;
	banner: BannerModel;
	isShowPopup: boolean = false;
	isEdit: boolean;
	languages: Array<LanguageModel>;
	languageDefault: boolean
	flag = {
		vi: LanguageFlag.vi,
		en: LanguageFlag.en,
	};
	templates: Array<TemplateModel> = TemplatesConfig;
	languageControl = new FormControl();
	constructor(
		private crudSvc: CrudService,
		private toastrSvc: ToastrService
	) { }

	ngOnInit(): void {
		this.getBanners();
		this.languages = JSON.parse(localStorage.getItem('languages'));
	}

	onOpenPopup(status, itemEdit?, isEdit?) {
		this.isShowPopup = status;
		if (itemEdit) {
			this.banner = itemEdit;
			this.isEdit = isEdit;
		} else {
			this.banner = new BannerModel();
			this.isEdit = false;
		}
	}

	onClosePopup(status: boolean) {
		this.isShowPopup = status;
		this.getBanners();
	}

	fetchBanner(e) {
		const params = new InputRequestOption();
		params.params = {
			languageId: e,
		};
		this.crudSvc
			.get(APIConfig.Banner.Gets, params)
			.pipe(
				map((response) => {
					return response.data;
				})
			)
			.subscribe((banners) => {
				this.banners = banners;
			});
	}

	getBanners() {
		const params = new InputRequestOption();
		params.params = {
			languageId: '1',
		};
		this.crudSvc
			.get(APIConfig.Banner.Gets, params)
			.pipe(map((response) => response.data))
			.subscribe((banners) => {
				this.banners = banners;
			});
	}

	deleteBanner(id: string) {
		const params = new InputRequestOption();
		params.params = {
			id: id,
		};
		this.crudSvc
			.delete(APIConfig.Banner.Delete, params)
			.subscribe((response) => {
				this.getBanners();
				if (response.code == 200) {
					this.toastrSvc.success(response.message);
				} else {
					this.toastrSvc.error(response.message);
				}
			});
	}
}
