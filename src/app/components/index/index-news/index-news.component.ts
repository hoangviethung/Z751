import { Component, OnInit } from '@angular/core';
import { IndexService } from '../index.service';

@Component({
	selector: 'app-index-news',
	templateUrl: './index-news.component.html',
	styleUrls: ['./index-news.component.scss']
})
export class IndexNewsComponent implements OnInit {

	newsList = []

	constructor(
		private _indexSvc: IndexService
	) {
	}

	ngOnInit() {
		this.returnData();
	}

	returnData() {
		this.getListNews();
	}

	getListNews() {
		this.newsList = this._indexSvc.getListNews();
	}
}
