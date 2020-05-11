import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MenuModel } from 'src/app/_core/models/menu.model';

@Component({
	selector: 'app-add-edit',
	templateUrl: './add-edit.component.html',
	styleUrls: ['./add-edit.component.scss']
})
export class AddEditComponent implements OnInit {
	@Input('menu') menu: MenuModel = new MenuModel();
	@Input('isEdit') isEdit: boolean;
	@Output('close') close: EventEmitter<boolean> = new EventEmitter<boolean>()
	constructor() { }

	ngOnInit(): void {
	}

	closePopup(status) {
		this.close.emit(status)
	}
}
