import { Component, OnInit } from '@angular/core';
import { PageInfoService } from 'src/app/shared/services/page-info.service';

@Component({
	selector: 'app-activities',
	templateUrl: './activities.component.html',
	styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent implements OnInit {

	constructor(private pageService: PageInfoService) {
		this.pageService.setTitle('Hoạt động');
	}

	ngOnInit() {
	}

}
