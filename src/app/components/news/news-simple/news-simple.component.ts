import { Component, OnInit, Input } from '@angular/core';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
	selector: 'app-news-simple',
	templateUrl: './news-simple.component.html',
	styleUrls: ['./news-simple.component.scss']
})
export class NewsSimpleComponent implements OnInit {

	@Input() news: any;
	url: string;

	constructor(
		private utilSvc: UtilsService
	) { }

	ngOnInit() {
		this.url = this.utilSvc.alias(this.news.title);
	}

}
