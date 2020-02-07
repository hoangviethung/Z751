import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-news-detail-content',
	templateUrl: './news-detail-content.component.html',
	styleUrls: ['./news-detail-content.component.scss']
})
export class NewsDetailContentComponent implements OnInit {

	@Input() content: any;

	constructor() { }

	ngOnInit() {
	}

}
