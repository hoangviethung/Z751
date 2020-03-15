import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/shared/services/http.service';
import { PageInfoService } from 'src/app/shared/services/page-info.service';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/shared/services/language.service';
import { BreadcrumbService } from '../../_shared/breadcrumb/breadcrumb.service';

@Component({
	selector: 'app-activities-video',
	templateUrl: './activities-video.component.html',
	styleUrls: ['./activities-video.component.scss']
})
export class ActivitiesVideoComponent implements OnInit {

	videos = [];
	data: {};
	popupShow = false;
	currentLocale: string;
	breadcrumbs = {
		en: ['Home', 'Videos'],
		vi: ['Trang chủ', 'Video clip'],
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
		this.pageInfoSvc.setTitle(this.translateSvc.instant('menu.videos'));
		this.brcSvc.setBreadcrumb(this.breadcrumbs);
		this.getVideos();
	}

	getVideos() {
		this.httpSvc.get(`assets/db/${this.currentLocale}/activities-videos.json`).subscribe(result => {
			this.videos = result.data;
		});

		this.languageSvc.getCurrentLanguageWhenChangeLanguage().subscribe(lang => {
			this.httpSvc.get(`assets/db/${lang}/activities-videos.json`).subscribe(result => {
				this.videos = result.data;
			});
		})
	}

	getVideoListPopup(thumbnail, url) {
		this.data = {
			thumbnail: thumbnail,
			videoUrl: url
		}
		this.popupShow = true;
	}

	closePopup(event) {
		this.popupShow = event;
	}
}
