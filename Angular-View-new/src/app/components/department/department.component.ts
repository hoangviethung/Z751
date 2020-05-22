import { Component, OnInit } from "@angular/core";
import {
	HttpService,
	InputRequestOption,
} from "src/core/services/http.service";
import { ProductModel } from "src/core/models/Product.model";
import { API } from "src/core/configs/api";

@Component({
	selector: "app-department",
	templateUrl: "./department.component.html",
	styleUrls: ["./department.component.scss"],
})
export class DepartmentComponent implements OnInit {
	title: string;
	description: string;
	image: string;
	designProducts: Array<ProductModel>;
	prepairProducts: Array<ProductModel>;
	address: string;
	workTime: string;
	Breadcrumb = {
		en: ["Home", "Departments"],
		vi: ["Trang chủ", "Đơn vị thành viên"],
	};
	breadcrumbs;
	departments: Array<ProductModel>;
	categoryUrl: string;
	productGroups: any;

	constructor(private httpSvc: HttpService) {}

	ngOnInit() {
		const pathname = document.location.pathname;
		const opts = new InputRequestOption();
		opts.params = {
			url: pathname,
		};
		this.getInformationOfDepartment(opts);
		this.getDepartment_ProductCapacities(opts);
		this.getProductGroups(opts);
	}

	getDepartment_ProductCapacities(opts: InputRequestOption) {
		this.httpSvc.get(API.Product.Gets, opts).subscribe((response) => {
			this.departments = response.data;
		});
	}

	getInformationOfDepartment(opts: InputRequestOption) {
		this.httpSvc.get(API.Category.Get, opts).subscribe((response) => {
			this.title = response.data.title;
			this.description = response.data.description;
			this.image = response.data.image;
		});
	}

	getProductGroups(opts: InputRequestOption) {
		this.httpSvc.get(API.ProductGroup.Gets, opts).subscribe((response) => {
			this.productGroups = response.data;
			console.log(this.productGroups);
		});
	}
}
