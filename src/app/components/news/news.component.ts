import { Component, OnInit, OnDestroy } from '@angular/core';
import { PageInfoService } from 'src/app/shared/services/page-info.service';
import { HttpService } from 'src/app/shared/services/http.service';
import { TranslateService } from '@ngx-translate/core';
import { NewsService } from './news.service';
import { LanguageService } from 'src/app/shared/services/language.service';
import { BreadcrumbService } from '../_shared/breadcrumb/breadcrumb.service';

@Component({
	selector: 'app-news',
	templateUrl: './news.component.html',
	styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit, OnDestroy {
	newsList = [];
	currentLocale: string;
	breadcrumbs = {
		en: ['Home', 'News'],
		vi: ['Trang chủ', 'Tin tức'],
	}

	constructor(
		private httpSvc: HttpService,
		private pageInfoSvc: PageInfoService,
		private translateSvc: TranslateService,
		private newsSvc: NewsService,
		private languageSvc: LanguageService,
		private brcSvc: BreadcrumbService
	) {
		this.currentLocale = this.languageSvc.getCurrentLanguage();
		this.pageInfoSvc.setTitle(this.translateSvc.instant('menu.news'));
	}

	ngOnInit() {
		this.getNewsList();
		this.brcSvc.setBreadcrumb(this.breadcrumbs);
	}
	ngOnDestroy() {

	}

	getNewsList() {
		this.httpSvc.get(`assets/db/${this.currentLocale}/news.json`)
			.subscribe(
				result => {
					this.newsSvc.setNewsListLoadedState();
					this.newsList = result.data;
				}
			)
		this.languageSvc.getCurrentLanguageWhenChangeLanguage().subscribe(lang => {
			this.httpSvc.get(`assets/db/${lang}/news.json`)
				.subscribe(
					result => {
						this.newsSvc.setNewsListLoadedState();
						this.newsList = result.data;
					}
				)
		})
	}

}
