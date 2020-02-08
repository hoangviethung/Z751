import { Component, OnInit } from '@angular/core';
import { PageInfoService } from 'src/app/shared/services/page-info.service';
import { HttpService } from 'src/app/shared/services/http.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
	selector: 'app-news',
	templateUrl: './news.component.html',
	styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
	NewsUrl = 'assets/db/vi/news.json';
	newsLists = [];

	constructor(
		private httpSvc: HttpService,
		private pageInfoSvc: PageInfoService,
		private translateSvc: TranslateService
	) {
		this.pageInfoSvc.setTitle(this.translateSvc.instant('menu.news'));
	}

	ngOnInit() {
		this.getNewsList();

	}

	getNewsList() {
		this.httpSvc.get(this.NewsUrl)
			.subscribe(
				result => {
					this.newsLists = result.data;
				}
			)
	}

}
