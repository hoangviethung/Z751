import { Component, OnInit } from '@angular/core';
import { PageInfoService } from 'src/app/shared/services/page-info.service';
import { TranslateService } from '@ngx-translate/core';
import { BreadcrumbService } from '../_shared/breadcrumb/breadcrumb.service';

@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

	breadcrumbs = {
		en: ['Home', 'Contact Us'],
		vi: ['Trang chủ', 'Liên hệ'],
	}
	constructor(
		private pageInfoSvc: PageInfoService,
		private translateSvc: TranslateService,
		private brcSvc: BreadcrumbService
	) {

	}

	ngOnInit() {
		this.pageInfoSvc.setTitle(this.translateSvc.instant('menu.contact'));
		this.brcSvc.setBreadcrumb(this.breadcrumbs);
	}

}
