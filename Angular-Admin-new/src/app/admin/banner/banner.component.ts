import { Component, OnInit } from '@angular/core';
import { APIConfig } from 'src/app/_core/API-config';
import { InputRequestOption } from 'src/app/_core/services/http.service';
import { map } from 'rxjs/operators';
import { BannerModel } from 'src/app/_core/models/banner.model';
import { LanguageModel } from 'src/app/_core/models/language';
import { ToastrService } from 'ngx-toastr';
import { LanguageFlag } from 'src/app/_core/enums/general.enum';
import { CrudService } from 'src/app/_core/services/crud.service';
import { TemplateModel } from 'src/app/_core/models/template.model';
import { TemplatesConfig } from 'src/app/_core/templates-config';
import { FormControl } from '@angular/forms';
import { FilterSearchModel } from 'src/app/_core/models/filter.model';
import { Router, ActivatedRoute } from '@angular/router';

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
	languageDefault: boolean;
	flag = {
		vi: LanguageFlag.vi,
		en: LanguageFlag.en,
	};
	templates: Array<TemplateModel> = TemplatesConfig;
	search: FilterSearchModel = new FilterSearchModel();
	constructor(
		private crudSvc: CrudService,
		private toastrSvc: ToastrService,
		private router: Router,
		private activatedRoute: ActivatedRoute
	) {}

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

	getBanners() {
		this.activatedRoute.queryParams.subscribe((queryParams) => {
			const defaultParams = {
				languageId: this.search.languageId,
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
			this.crudSvc
				.get(APIConfig.Banner.Gets, opts)
				.pipe(
					map((response) => {
						return response.data;
					})
				)
				.subscribe((banners) => {
					this.banners = banners;
				});
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
					let filterParams = {
						languageId: this.search.languageId,
					};
					this.router
						.navigate([], {
							relativeTo: this.activatedRoute,
							queryParams: filterParams,
							queryParamsHandling: 'merge',
						})
						.then(() => {
							this.getBanners();
							this.toastrSvc.success(response.message);
						});
					this.toastrSvc.success(response.message);
				} else {
					this.toastrSvc.error(response.message);
				}
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
				this.getBanners();
			});
	}
}
