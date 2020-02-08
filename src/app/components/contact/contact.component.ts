import { Component, OnInit } from '@angular/core';
import { PageInfoService } from 'src/app/shared/services/page-info.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

	constructor(
		private pageInfoSvc: PageInfoService,
		private translateSvc: TranslateService
	) {

	}

	ngOnInit() {
		this.pageInfoSvc.setTitle(this.translateSvc.instant('menu.contact'));
	}

}
