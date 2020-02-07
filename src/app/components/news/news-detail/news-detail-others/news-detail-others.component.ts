import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../news.service';

@Component({
	selector: 'app-news-detail-others',
	templateUrl: './news-detail-others.component.html',
	styleUrls: ['./news-detail-others.component.scss']
})
export class NewsDetailOthersComponent implements OnInit {

	listNewsOthers = [];

	constructor(
		private newsListSvc: NewsService
	) { }

	ngOnInit() {
		this.getNewsList();

	}

	getNewsList() {
		this.newsListSvc.fetchNews('assets/db/vi/news.json')
			.subscribe(
				result => {
					this.listNewsOthers = result;
				},
				error => {
				}
			)
	}

}
