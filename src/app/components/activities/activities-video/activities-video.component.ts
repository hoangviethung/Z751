import { Component, OnInit } from '@angular/core';
import { ActivitiesService } from '../activities.service';

@Component({
	selector: 'app-activities-video',
	templateUrl: './activities-video.component.html',
	styleUrls: ['./activities-video.component.scss']
})
export class ActivitiesVideoComponent implements OnInit {

	activitiesVideoList = [];
	constructor(
		private _activitiesSvc: ActivitiesService
	) { }

	ngOnInit() {
		this.returnData();
	}

	returnData() {
		this.getActivitiesVideoList();
	}

	getActivitiesVideoList() {
		this.activitiesVideoList = this._activitiesSvc.getActivitiesVideoList();
	}
}
