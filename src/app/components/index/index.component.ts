import { Component, OnInit } from '@angular/core';
import { PageInfoService } from 'src/app/shared/services/page-info.service';

@Component({
	selector: 'app-index',
	templateUrl: './index.component.html',
	styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

	constructor(private pageService: PageInfoService) {
		this.pageService.setTitle('Trang chủ');
	}

	ngOnInit() {
	}
}
