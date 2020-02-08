import { Component, OnInit } from '@angular/core';
import { PageInfoService } from 'src/app/shared/services/page-info.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
	selector: 'app-page-not-found',
	templateUrl: './page-not-found.component.html',
	styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {

	constructor(
		private pageInfoSvc: PageInfoService,
		private translateSvc: TranslateService
	) {
		this.pageInfoSvc.setTitle(this.translateSvc.instant('menu.404'));
	}

	ngOnInit() {
	}

}
