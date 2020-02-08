import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/shared/services/http.service';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
	selector: 'app-index-news',
	templateUrl: './index-news.component.html',
	styleUrls: ['./index-news.component.scss']
})
export class IndexNewsComponent implements OnInit {
	HomeNewsUrl = 'assets/db/vi/news.json';
	news = [];

	constructor(
		private httpSvc: HttpService,
		private utilSvc: UtilsService
	) {
	}

	ngOnInit() {
		this.getNews();
	}

	getNews() {
		this.httpSvc.get(this.HomeNewsUrl).subscribe(result => {
			let data = result.data;
			data.forEach(news => {
				news['url'] = this.utilSvc.alias(news.title);
				this.news.push(news);
			});
		});
	}
}
