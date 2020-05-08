import { Component, OnInit } from '@angular/core';
import { APIConfig } from 'src/app/_core/API-config';
import { HttpService, InputRequestOption } from 'src/app/_core/services/http.service';
import { map } from 'rxjs/operators';
import { BannerModel } from 'src/app/_core/models/banner.model';
@Component({
	selector: 'app-banner',
	templateUrl: './banner.component.html',
	styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
	banners: Array<BannerModel>
	banner: BannerModel
	isShowPopup: boolean = false

	constructor(
		private httpSvc: HttpService,
	) { }

	ngOnInit(): void {
		this.getBanners();
	}

	onOpenPopup(status, itemEdit?) {
		this.isShowPopup = status;
		if (itemEdit) {
			this.banner = itemEdit;
		} else {
			this.banner = new BannerModel();
		}
	}

	onClosePopup(status: boolean) {
		this.isShowPopup = status;
		this.getBanners()
	}

	fetchBanner(e) {
		const params = new InputRequestOption()
		params.params = {
			languageId: e.target.value,
		}
		this.httpSvc.get(APIConfig.Banner.Gets, params)
			.pipe(map((response) => response.data))
			.subscribe((banners) => {
				this.banners = banners;
			});
	}

	getBanners() {
		const params = new InputRequestOption()
		params.params = {
			languageId: '1',
		}
		this.httpSvc.get(APIConfig.Banner.Gets, params)
			.pipe(map((response) => response.data))
			.subscribe((banners) => {
				this.banners = banners;
			});
	}

	deleteBanner(id) {
		const params = new InputRequestOption()
		params.params = {
			id: id,
		}
		this.httpSvc.post(APIConfig.Banner.Delete, params)
			.subscribe(() => {
				this.getBanners()
			})
	}
}
