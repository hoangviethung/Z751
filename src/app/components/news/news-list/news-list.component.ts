import { Component, OnInit } from '@angular/core';
import { PageInfoService } from 'src/app/shared/services/page-info.service';
import { NewsListService } from './news-list.service';

@Component({
	selector: 'app-news-list',
	templateUrl: './news-list.component.html',
	styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {

	newsLists: Array<any>;

	constructor(
		private pageService: PageInfoService,
		private newsListSvc: NewsListService
	) {
		this.pageService.setTitle('Tin tức');
	}

	ngOnInit() {
		this.getNewsList();

	}

	getNewsList() {
		this.newsListSvc.fetchNews('/assets/db/news.json')
			.subscribe(
				result => {
					this.newsLists = result;
					console.log(result);
				},
				error => {
					console.log(error);
				}
			)
	}

}
