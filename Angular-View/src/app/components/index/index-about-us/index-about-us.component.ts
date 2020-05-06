import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { ApiConfigModel } from 'src/app/models/common/api-config.model';

@Component({
	selector: 'app-index-about-us',
	templateUrl: './index-about-us.component.html',
	styleUrls: ['./index-about-us.component.scss']
})
export class IndexAboutUsComponent implements OnInit {

	constructor(
		private HttpSvc: HttpService
	) { }

	ngOnInit() {
	}

	getContent() {
		// this.HttpSvc.get(ApiConfigModel.section.get)
	}
}
