import { Component, OnInit } from '@angular/core';
import { IndexService } from '../index.service';

@Component({
	selector: 'app-index-activities',
	templateUrl: './index-activities.component.html',
	styleUrls: ['./index-activities.component.scss']
})
export class IndexActivitiesComponent implements OnInit {

	activitiesList = [];

	constructor(
		private _indexSvc: IndexService
	) { }

	ngOnInit() {
		this.returnData();
	}

	returnData() {
		this.getActivitiesList();
	}

	getActivitiesList() {
		this.activitiesList = this._indexSvc.activitiesList;
	}
}
