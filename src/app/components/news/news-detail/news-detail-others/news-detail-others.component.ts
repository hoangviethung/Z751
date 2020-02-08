import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/shared/services/http.service';

@Component({
	selector: 'app-news-detail-others',
	templateUrl: './news-detail-others.component.html',
	styleUrls: ['./news-detail-others.component.scss']
})
export class NewsDetailOthersComponent implements OnInit {

	listNewsOthers = [];

	constructor(
		private httpSvc: HttpService
	) { }

	ngOnInit() {
		this.getNewsList();

	}

	getNewsList() {
		this.httpSvc.get('assets/db/vi/news.json')
			.subscribe(
				result => {
					this.listNewsOthers = result.data;
				}
			)
	}

}
