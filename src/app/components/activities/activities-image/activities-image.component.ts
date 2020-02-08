import { Component, OnInit } from '@angular/core';
import { ActivitiesService } from '../activities.service';

@Component({
	selector: 'app-activities-image',
	templateUrl: './activities-image.component.html',
	styleUrls: ['./activities-image.component.scss']
})
export class ActivitiesImageComponent implements OnInit {

	activitiesImageList = [];

	constructor(
		private _activitiesSvc: ActivitiesService
	) { }

	ngOnInit() {
		this.returnData();
	}

	returnData() {
		this.getActivitiesImageList();
	}

	getActivitiesImageList() {
		this.activitiesImageList = this._activitiesSvc.getActivitiesImageList();
	}
}
