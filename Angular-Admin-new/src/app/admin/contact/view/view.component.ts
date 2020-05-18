import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ContactModel } from 'src/app/_core/models/contact.model';

@Component({
	selector: 'app-view',
	templateUrl: './view.component.html',
	styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
	@Input('contact') contact: ContactModel = new ContactModel();
	@Output('close') close: EventEmitter<boolean> = new EventEmitter<boolean>();
	constructor() { }

	ngOnInit(): void {
		console.log(this.contact);
	}

	closePopup(status) {
		this.close.emit(status)
	}
}
