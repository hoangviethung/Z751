import { Component, OnInit } from '@angular/core'
import { BannerService } from './banner.service';
import { BannerModel } from 'src/_core/models/banner.model';

@Component({
	selector: 'app-banner',
	templateUrl: './banner.component.html',
	styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit {
	banners: Array<BannerModel>;
	constructor(
		private BannerSvc: BannerService,
	) {
		this.BannerSvc.fetch();
	}

	ngOnInit() {
		// this.getBannerList();
	}

	getBannerList() {
		this.BannerSvc.fetch().subscribe(response => {
			console.log(response);
		})
	}
}