import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { DialogService } from './dialog.service';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-dialog',
	templateUrl: './dialog.component.html',
	styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit {
	showDialog: boolean;
	subscription: Subscription;

	constructor(private dialogSvc: DialogService) {}

	ngOnInit(): void {
		this.subscription = this.dialogSvc
			.getStateDialog()
			.subscribe((value) => {
				this.showDialog = value;
			});
	}

	// accept() {
	// 	this.showDialog = false;
	// 	this.deleteAccept.emit(true);
	// }

	// decline() {
	// 	this.showDialog = false;
	// 	this.deleteAccept.emit(false);
	// }
	// ngOnDestroy() {}
}
