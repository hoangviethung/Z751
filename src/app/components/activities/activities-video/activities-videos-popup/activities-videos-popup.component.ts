import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-activities-videos-popup',
	templateUrl: './activities-videos-popup.component.html',
	styleUrls: ['./activities-videos-popup.component.scss']
})
export class ActivitiesVideosPopupComponent implements OnInit {

	@Input() data;
	@Output() close: EventEmitter<boolean> = new EventEmitter<boolean>();

	constructor() { }

	ngOnInit() {
	}

	emitClickValue() {
		this.close.emit(false);
	}
}
