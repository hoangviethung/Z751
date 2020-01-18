import { Component, OnInit } from '@angular/core';
import { PageInfoService } from 'src/app/shared/services/page-info.service';
import { AboutService } from './about.service';
import { SwiperConfigInterface, SwiperDirective, SwiperComponent } from 'ngx-swiper-wrapper';
@Component({
	selector: 'app-about',
	templateUrl: './about.component.html',
	styleUrls: ['./about.component.scss'],
	providers: [AboutService]
})
export class AboutComponent implements OnInit {
	listMissionVision = [];

	constructor(
		private pageService: PageInfoService,
		private _aboutSvc: AboutService
	) {
		this.pageService.setTitle('Giới thiệu');
	}

	ngOnInit() {
		this.returnData();
	}

	returnData() {
		this.getMission();
	}

	getMission() {
		this.listMissionVision = this._aboutSvc.getListMission();
	}
}
