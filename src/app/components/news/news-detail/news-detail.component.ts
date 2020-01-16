import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-news-detail',
	templateUrl: './news-detail.component.html',
	styleUrls: ['./news-detail.component.scss']
})
export class NewsDetailComponent implements OnInit {

	constructor(
		private activatedRoute: ActivatedRoute
	) { }

	ngOnInit() {
		this.activatedRoute.params.subscribe(params => { });
	}
}
