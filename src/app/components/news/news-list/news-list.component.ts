import { Component, OnInit } from '@angular/core';
import { PageInfoService } from 'src/app/shared/services/page-info.service';

@Component({
	selector: 'app-news-list',
	templateUrl: './news-list.component.html',
	styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {

	constructor(private pageService: PageInfoService) {
		this.pageService.setTitle('Tin tức');
	}

	ngOnInit() {
	}

}
