import { Component, OnInit, OnDestroy } from '@angular/core';
import { PageInfoService } from 'src/app/shared/services/page-info.service';
import { HttpService } from 'src/app/shared/services/http.service';
import { TranslateService } from '@ngx-translate/core';
// import { IndexedDbService } from 'src/app/shared/services/indexed-db.service';
import { NewsService } from './news.service';
require('fake-indexeddb');

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
		// private indexedDbSvc: IndexedDbService,
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
		// let status = this.newsSvc.isNewsListLoaded;

		// if (status) {
		// 	this.indexedDbSvc.getObjectStor('news').then(
		// 		result => {
		// 			this.newsList = result
		// 		}
		// 	)
		// } else {

		// 	// 	.then(() => this.httpSvc.get(this.NewsUrl)
		// 	// 		.subscribe(
		// 	// 			result => {
		// 	// 				this.newsSvc.setNewsListLoadedState();
		// 	// 				this.newsList = result.data;
		// 	// 				this.newsList.forEach(
		// 	// 					news => {
		// 	// 						this.indexedDbSvc.addObjectStore('news', news);
		// 	// 					}
		// 	// 				)
		// 	// 			}
		// 	// 		))
		// 	this.indexedDbSvc.clearObjectStore('news');
		// 	console.log(1);
		// 	console.log(this.indexedDbSvc);

		// 	this.httpSvc.get(this.NewsUrl)
		// 		.subscribe(
		// 			result => {
		// 				this.newsSvc.setNewsListLoadedState();
		// 				this.newsList = result.data;
		// 				this.newsList.forEach(
		// 					news => {
		// 						this.indexedDbSvc.addObjectStore('news', news);
		// 					}
		// 				)
		// 			}
		// 		)
		// }
		this.httpSvc.get(this.NewsUrl)
			.subscribe(
				result => {
					this.newsSvc.setNewsListLoadedState();
					this.newsList = result.data;
				}
			)
	}

}
