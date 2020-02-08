import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/shared/services/http.service';

@Component({
	selector: 'app-index-activities',
	templateUrl: './index-activities.component.html',
	styleUrls: ['./index-activities.component.scss']
})
export class IndexActivitiesComponent implements OnInit {
	IndexActivitiesUrl = 'assets/db/vi/index-activities.json'
	activities = [];

	constructor(
		private httpSvc: HttpService
	) { }

	ngOnInit() {
		this.getActivitiesList();
	}

	getActivitiesList() {
		this.httpSvc.get(this.IndexActivitiesUrl).subscribe(result => {
			this.activities = result.data;
		});
	}
}
