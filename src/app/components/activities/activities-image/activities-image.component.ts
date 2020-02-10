import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpService } from 'src/app/shared/services/http.service';
import { PageInfoService } from 'src/app/shared/services/page-info.service';
import { TranslateService } from '@ngx-translate/core';
import { SwiperConfigInterface, SwiperDirective } from 'ngx-swiper-wrapper';

@Component({
	selector: 'app-activities-image',
	templateUrl: './activities-image.component.html',
	styleUrls: ['./activities-image.component.scss']
})
export class ActivitiesImageComponent implements OnInit {
	imageUrl = 'assets/db/vi/activities-images.json';
	images = [];
	list = [];
	popupShow = false;

	constructor(
		private httpSvc: HttpService,
		private pageInfoSvc: PageInfoService,
		private translateSvc: TranslateService
	) { }

	ngOnInit() {
		this.pageInfoSvc.setTitle(this.translateSvc.instant('menu.images'));
		this.getImages();
	}

	getImages() {
		this.httpSvc.get(this.imageUrl).subscribe(result => {
			this.images = result.data;
		});
	}

	getImageListPopup(list) {
		this.list = list;
		this.popupShow = true;
	}

	closePopup(event) {
		this.popupShow = event;
	}
}
