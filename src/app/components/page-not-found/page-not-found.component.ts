import { Component, OnInit } from '@angular/core';
import { PageInfoService } from 'src/app/shared/services/page-info.service';

@Component({
	selector: 'app-page-not-found',
	templateUrl: './page-not-found.component.html',
	styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {

	constructor(private pageService: PageInfoService) {
		this.pageService.setTitle('Không tìm thấy trang');
	}

	ngOnInit() {
	}

}
