import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from '../news.service';

@Component({
	selector: 'app-news-detail',
	templateUrl: './news-detail.component.html',
	styleUrls: ['./news-detail.component.scss']
})
export class NewsDetailComponent implements OnInit {

	content = {};

	constructor(
		private activatedRoute: ActivatedRoute,
		private newsSvc: NewsService
	) { }

	ngOnInit() {
		this.activatedRoute.params.subscribe(result => {
			this.newsSvc.fetchNewsDetail(`assets/db/vi/${result.id}.json`).subscribe(data => {
				this.content = data;
			})
		})
	}
}
