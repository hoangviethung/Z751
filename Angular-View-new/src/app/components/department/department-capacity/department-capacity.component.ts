import { Component, OnInit, Input, Inject } from "@angular/core";
import {
	HttpService,
	InputRequestOption,
} from "src/core/services/http.service";
import { ProductModel } from "src/core/models/Product.model";
import { API } from "src/core/configs/api";
import { DOCUMENT } from "@angular/common";

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
	defaultImage =
		"https://i1.wp.com/www.uminahairandbeauty.com.au/wp-content/uploads/2018/08/background-wallpaper-noisy-gray-light-and-white-color-small-random-spots-texture.jpg?fit=256%2C256&ssl=1";
	constructor(
		private httpSvc: HttpService,
		@Inject(DOCUMENT) private document: Document
	) {}

	ngOnInit() {
		const pathname = this.document.location.pathname;
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
