import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/_core/services/crud.service';
import { ApiConfig } from 'src/_core/configs/api';
import { ContactModel } from 'src/_core/models/contact.model';
import { Router } from '@angular/router';
import { HttpParams } from '@angular/common/http';

@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
	contacts: Array<ContactModel>
	constructor(
		private curdSvc: CrudService,
		private router: Router
	) { }

	ngOnInit(): void {
		this.getsContact();
	}

	getsContact() {
		this.curdSvc.gets(ApiConfig.contact.gets)
			.subscribe((response) => {
				console.log(response.data);
				this.contacts = response.data
			})
	}

	viewDetailContact(id) {
		this.router.navigate([`/admin/contact/viewDetail/${id}`])
	}

	deleteContact(id) {
		console.log('Bạn đã xóa liên lạc có ID => ' + id);
		this.curdSvc
			.delete(`${ApiConfig.contact.delete}?id=${id}`)
			.subscribe(() => {
				this.getsContact()
			})
	}
}
