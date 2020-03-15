import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PageInfoService } from 'src/app/shared/services/page-info.service';
import { HttpService } from 'src/app/shared/services/http.service';
import { TranslateService } from '@ngx-translate/core';
import { BreadcrumbService } from '../_shared/breadcrumb/breadcrumb.service';

@Component({
	selector: 'app-about',
	templateUrl: './about.component.html',
	styleUrls: ['./about.component.scss'],
})

export class AboutComponent implements OnInit {
	MissionVissionUrl = 'assets/db/vi/about-mission.json'
	listMissionVision = [];
	breadcrumbs = {
		en: ['Home', 'About Z751'],
		vi: ['Trang chủ', 'Về công ty Z751'],
	}

	constructor(
		private httpSvc: HttpService,
		private pageInfoSvc: PageInfoService,
		private translateSvc: TranslateService,
		private brcSvc: BreadcrumbService
	) {
	}

	ngOnInit() {
		this.pageInfoSvc.setTitle(this.translateSvc.instant('menu.about'));
		this.getMission();
		this.brcSvc.setBreadcrumb(this.breadcrumbs)
	}

	getMission() {
		this.httpSvc.get(this.MissionVissionUrl).subscribe(result => {
			this.listMissionVision = result.data;
		})
	}
}
