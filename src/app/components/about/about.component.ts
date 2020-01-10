import { Component, OnInit } from '@angular/core';
import { PageInfoService } from 'src/app/_utilities/services/page-info.service';

@Component({
	selector: 'app-about',
	templateUrl: './about.component.html',
	styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

	constructor(private pageService: PageInfoService) {
		this.pageService.setTitle('Giới thiệu');
	}

	ngOnInit() {
	}

}
