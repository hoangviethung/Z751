import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/shared/services/http.service';

@Component({
	selector: 'app-news-detail',
	templateUrl: './news-detail.component.html',
	styleUrls: ['./news-detail.component.scss']
})
export class NewsDetailComponent implements OnInit {

	content = {};

	constructor(
		private activatedRoute: ActivatedRoute,
		private httpSvc: HttpService
	) { }

	ngOnInit() {
		this.activatedRoute.params.subscribe(param => {
			this.httpSvc.get(`assets/db/vi/${param.id}.json`).subscribe(result => {
				this.content = result.data;
			})
		})
	}
}
