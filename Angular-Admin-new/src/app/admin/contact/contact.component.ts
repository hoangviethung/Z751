import { Component, OnInit } from '@angular/core';
import { APIConfig } from 'src/app/_core/API-config';
import { ToastrService } from 'ngx-toastr';
import { map } from 'rxjs/operators';
import { TemplatesConfig } from 'src/app/_core/templates-config';
import { TemplateModel } from 'src/app/_core/models/template.model';
import { HttpService, InputRequestOption } from 'src/app/_core/services/http.service';
import { ContactModel } from 'src/app/_core/models/contact.model';
@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
	contacts: Array<ContactModel>
	contact: ContactModel
	isShowPopup: boolean = false;
	isEdit: boolean;
	constructor(
		private httpSvc: HttpService,
		private toastrSvc: ToastrService
	) { }

	ngOnInit(): void {
		this.getContacts()
	}

	onOpenPopup(status, itemView) {
		this.isShowPopup = status;
		this.contact = itemView
	}

	onClosePopup(status) {
		this.isShowPopup = status;
		this.getContacts();
	}

	getContacts() {
		this.httpSvc.get(APIConfig.Contact.Gets)
			.pipe(map((response) => {
				return response.data
			}))
			.subscribe((contacts) => {
				console.log(contacts);
				this.contacts = contacts
			})
	}

	dateleContact(id) {
		const option = new InputRequestOption()
		option.params = {
			'id': id
		}
		this.httpSvc.post(APIConfig.Contact.Delete, option)
			.subscribe((response) => {
				if (response.code === 200) {
					this.getContacts();
					this.toastrSvc.success(response.message)
				} else {
					this.toastrSvc.error(response.message)
				}
			})
	}
}
