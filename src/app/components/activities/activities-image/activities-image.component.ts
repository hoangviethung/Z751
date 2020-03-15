import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpService } from 'src/app/shared/services/http.service';
import { PageInfoService } from 'src/app/shared/services/page-info.service';
import { TranslateService } from '@ngx-translate/core';
import { SwiperConfigInterface, SwiperDirective } from 'ngx-swiper-wrapper';
import { LanguageService } from 'src/app/shared/services/language.service';
import { BreadcrumbService } from '../../_shared/breadcrumb/breadcrumb.service';

@Component({
	selector: 'app-activities-image',
	templateUrl: './activities-image.component.html',
	styleUrls: ['./activities-image.component.scss']
})
export class ActivitiesImageComponent implements OnInit {
	images = [];
	list = [];
	popupShow = false;
	currentLocale: string;
	breadcrumbs = {
		en: ['Home', 'Images'],
		vi: ['Trang chủ', 'Hình ảnh'],
	}

	constructor(
		private httpSvc: HttpService,
		private pageInfoSvc: PageInfoService,
		private translateSvc: TranslateService,
		private languageSvc: LanguageService,
		private brcSvc: BreadcrumbService
	) {
		this.currentLocale = this.languageSvc.getCurrentLanguage();
	}

	ngOnInit() {
		this.pageInfoSvc.setTitle(this.translateSvc.instant('menu.images'));
		this.brcSvc.setBreadcrumb(this.breadcrumbs);
		this.getImages();
	}

	getImages() {
		this.httpSvc.get(`assets/db/${this.currentLocale}/activities-images.json`).subscribe(result => {
			this.images = result.data;
		});

		this.languageSvc.getCurrentLanguageWhenChangeLanguage().subscribe(lang => {
			this.httpSvc.get(`assets/db/${lang}/activities-images.json`).subscribe(result => {
				this.images = result.data;
			});
		})
	}

	getImageListPopup(list) {
		this.list = list;
		this.popupShow = true;
	}

	closePopup(event) {
		this.popupShow = event;
	}
}
