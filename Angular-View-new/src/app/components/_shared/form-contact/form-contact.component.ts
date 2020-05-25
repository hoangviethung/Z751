import { Component, OnInit, Input } from "@angular/core";
import { Category } from "src/core/models/Category.model";
import { FormContactModel } from "src/core/models/FonmContact.model";
import {
	HttpService,
	InputRequestOption,
} from "src/core/services/http.service";
import { API } from "src/core/configs/api";

@Component({
	selector: "app-form-contact",
	templateUrl: "./form-contact.component.html",
	styleUrls: ["./form-contact.component.scss"],
})
export class FormContactComponent implements OnInit {
	@Input("departments") departments: Array<Category>;
	@Input("categoryUrl") categoryUrl: string;
	FormContact: FormContactModel = new FormContactModel();

	constructor(private httpSvc: HttpService) {}

	ngOnInit() {}

	submitForm() {
		const option = new InputRequestOption();
		option.body = this.FormContact;
		this.httpSvc.post(API.Contact.Submit, option).subscribe((response) => {
			if (response.code === 200) {
			} else {
			}
		});
	}
}
