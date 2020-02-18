import { Component, OnInit, OnDestroy } from '@angular/core';
import { PageInfoService } from 'src/app/shared/services/page-info.service';
import { HttpService } from 'src/app/shared/services/http.service';
import { TranslateService } from '@ngx-translate/core';
import { NewsService } from './news.service';

@Component({
	selector: 'app-news',
	templateUrl: './news.component.html',
	styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit, OnDestroy {
	NewsUrl = 'assets/db/vi/news.json';
	newsList = [];

	constructor(
		private httpSvc: HttpService,
		private pageInfoSvc: PageInfoService,
		private translateSvc: TranslateService,
		private newsSvc: NewsService
	) {
		this.pageInfoSvc.setTitle(this.translateSvc.instant('menu.news'));
	}

	ngOnInit() {
		this.getNewsList();
	}
	ngOnDestroy() {

	}

	getNewsList() {
		this.httpSvc.get(this.NewsUrl)
			.subscribe(
				result => {
					this.newsSvc.setNewsListLoadedState();
					this.newsList = result.data;
				}
			)
	}

}
