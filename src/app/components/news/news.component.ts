import { Component, OnInit } from '@angular/core';
import { PageInfoService } from 'src/app/shared/services/page-info.service';
import { NewsService } from './news.service';

@Component({
	selector: 'app-news',
	templateUrl: './news.component.html',
	styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

	newsLists = [];

	constructor(
		private newsListSvc: NewsService,
		private pageService: PageInfoService
	) {
		this.pageService.setTitle('Tin tức');
	}

	ngOnInit() {
		this.getNewsList();

	}

	getNewsList() {
		this.newsListSvc.fetchNews('assets/db/vi/news.json')
			.subscribe(
				result => {
					this.newsLists = result;
				},
				error => {
				}
			)
	}

}
