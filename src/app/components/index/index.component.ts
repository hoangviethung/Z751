import { Component, OnInit } from '@angular/core';
import { PageInfoService } from 'src/app/shared/services/page-info.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
	selector: 'app-index',
	templateUrl: './index.component.html',
	styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

	constructor(
		private pageInfoSvc: PageInfoService,
		private translateSvc: TranslateService
	) {
		this.pageInfoSvc.setTitle(this.translateSvc.instant('menu.index'));
	}

	ngOnInit() {
	}
}
