import { Component, OnInit } from '@angular/core';
import { PageInfoService } from 'src/app/shared/services/page-info.service';
import { TranslateService } from '@ngx-translate/core';
import { BreadcrumbService } from '../_shared/breadcrumb/breadcrumb.service';

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

	breadcrumbs = {
		en: ['Home', 'Profiles'],
		vi: ['Trang chủ', 'Năng lực'],
	};
	constructor(
		private pageInfoSvc: PageInfoService,
		private translateSvc: TranslateService,
		private brcSvc: BreadcrumbService
	) {
	}

	ngOnInit() {
		this.pageInfoSvc.setTitle(this.translateSvc.instant('menu.profiles'));
		this.brcSvc.setBreadcrumb(this.breadcrumbs);
	}

}
