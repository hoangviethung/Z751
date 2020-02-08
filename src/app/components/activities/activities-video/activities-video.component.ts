import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/shared/services/http.service';
import { PageInfoService } from 'src/app/shared/services/page-info.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
	selector: 'app-activities-video',
	templateUrl: './activities-video.component.html',
	styleUrls: ['./activities-video.component.scss']
})
export class ActivitiesVideoComponent implements OnInit {
	VideoUrl = 'assets/db/vi/activities-images.json';
	videos = [];

	constructor(
		private httpSvc: HttpService,
		private pageInfoSvc: PageInfoService,
		private translateSvc: TranslateService
	) { }

	ngOnInit() {
		this.pageInfoSvc.setTitle(this.translateSvc.instant('menu.videos'));
		this.getVideos();
	}

	getVideos() {
		this.httpSvc.get(this.VideoUrl).subscribe(result => {
			this.videos = result.data;
		});
	}
}
