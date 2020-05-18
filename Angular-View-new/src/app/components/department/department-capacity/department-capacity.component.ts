import { Component, OnInit, Input } from "@angular/core";
import {
	HttpService,
	InputRequestOption,
} from "src/core/services/http.service";
import { ProductModel } from "src/core/models/Product.model";
import { API } from "src/core/configs/api";

@Component({
	selector: "app-department-capacity",
	templateUrl: "./department-capacity.component.html",
	styleUrls: ["./department-capacity.component.scss"],
})
export class DepartmentCapacityComponent implements OnInit {
	@Input("language") currentLanguage: string;
	title: string;
	description: string;
	image: string;
	@Input("capacityProducts") capacityProducts: Array<ProductModel>;

	constructor(private httpSvc: HttpService) {}

	ngOnInit() {
		const pathname = document.location.pathname;
		const opts = new InputRequestOption();
		opts.params = {
			url: pathname,
		};
		this.getInformationOfDepartment(opts);
		// this.getDepartment_ProductCapacities(opts);
		// this.getDepartmentList();
	}

	// getDepartment_ProductCapacities(opts: InputRequestOption) {
	// 	this.httpSvc.get(API.Product.Gets, opts).subscribe((response) => {
	// 		this.departments = response.data;
	// 	});
	// }

	getInformationOfDepartment(opts: InputRequestOption) {
		this.httpSvc.get(API.Category.Get, opts).subscribe((response) => {
			this.title = response.data.title;
			this.description = response.data.description;
			this.image = response.data.image;
		});
	}
}
