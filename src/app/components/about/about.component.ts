import { Component, OnInit } from '@angular/core';
import { PageInfoService } from 'src/app/shared/services/page-info.service';
import { HttpService } from 'src/app/shared/services/http.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
	selector: 'app-about',
	templateUrl: './about.component.html',
	styleUrls: ['./about.component.scss'],
})

export class AboutComponent implements OnInit {
	MissionVissionUrl = 'assets/db/vi/about-mission.json'
	listMissionVision = [];

	constructor(
		private httpSvc: HttpService,
		private pageInfoSvc: PageInfoService,
		private translateSvc: TranslateService
	) {
	}

	ngOnInit() {
		this.pageInfoSvc.setTitle(this.translateSvc.instant('menu.about'));
		this.getMission();
	}

	getMission() {
		this.httpSvc.get(this.MissionVissionUrl).subscribe(result => {
			this.listMissionVision = result.data;
		})
	}
}
