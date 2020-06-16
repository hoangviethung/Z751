import { Component, OnInit, Input, Inject } from "@angular/core";
import { Category } from "src/core/models/Category.model";
import { FormContactModel } from "src/core/models/FonmContact.model";
import {
	HttpService,
	InputRequestOption,
} from "src/core/services/http.service";
import { API } from "src/core/configs/api";
import { DOCUMENT } from "@angular/common";
@Component({
	selector: "app-form-contact",
	templateUrl: "./form-contact.component.html",
	styleUrls: ["./form-contact.component.scss"],
})
export class FormContactComponent implements OnInit {
	@Input("departments") departments: Array<Category>;
	@Input("categoryUrl") categoryUrl: string;
	FormContact: FormContactModel = new FormContactModel();

	constructor(
		private httpSvc: HttpService,
		@Inject(DOCUMENT) private document: Document
	) {}

	ngOnInit() {}

	submitForm() {
		const option = new InputRequestOption();
		option.body = this.FormContact;
		this.httpSvc.post(API.Contact.Submit, option).subscribe((response) => {
			if (response.code === 200) {
				alert(response.message);
			} else {
				alert(response.message);
				this.document
					.querySelectorAll("input,textarea")
					.forEach((item) => {
						item.classList.add("input-validation-error");
					});
			}
		});
	}

	validationForm(value: any) {
		let result: boolean;
		// const name = value.contactName;
		// const phone = value.contactPhone;
		// const address = value.contactAddress;
		// const content = value.contactContent;
		// const email = value.contactEmail;
		// if (
		// 	name == undefined ||
		// 	phone == undefined ||
		// 	address == undefined ||
		// 	content == undefined ||
		// 	email == undefined
		// ) {
		// 	this.document
		// 		.querySelector("[name=contactName]")
		// 		.classList.add("input-validation-error");
		// 	this.document.querySelector("[name=contactName]").nextSibling;
		// }
		return result;
	}
}
