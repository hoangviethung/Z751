import { Component, OnInit, Input } from "@angular/core";
import { Category } from "src/core/models/Category.model";

@Component({
	selector: "app-form-contact",
	templateUrl: "./form-contact.component.html",
	styleUrls: ["./form-contact.component.scss"],
})
export class FormContactComponent implements OnInit {
	@Input("departments") departments: Array<Category>;
	@Input("categoryUrl") categoryUrl: string;
	constructor() {}

	ngOnInit() {
		console.log(this.departments);
	}
}
