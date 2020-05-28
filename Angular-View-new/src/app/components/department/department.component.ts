import { Component, OnInit, Inject, Input } from "@angular/core";
import {
	HttpService,
	InputRequestOption,
} from "src/core/services/http.service";
import { ProductModel } from "src/core/models/Product.model";
import { DOCUMENT } from "@angular/common";
import { API } from "src/core/configs/api";
import {
	PageInfoService,
	MetaModel,
} from "src/core/services/page-info.service";
import * as e from "express";
import { ProductGroupModel } from "src/core/models/ProductGroup.model";

@Component({
	selector: "app-department",
	templateUrl: "./department.component.html",
	styleUrls: ["./department.component.scss"],
})
export class DepartmentComponent implements OnInit {
	title: string;
	@Input("pageTitle") pageTitle: string;
	description: string;
	image: string;
	designProducts: Array<ProductModel>;
	prepairProducts: Array<ProductModel>;
	address: string;
	workTime: string;
	breadcrumbs;
	departments: Array<ProductModel>;
	categoryUrl: string;
	productGroups: Array<ProductGroupModel>;
	isShowListProduct: boolean;
	defaultImage =
		"https://i1.wp.com/www.uminahairandbeauty.com.au/wp-content/uploads/2018/08/background-wallpaper-noisy-gray-light-and-white-color-small-random-spots-texture.jpg?fit=256%2C256&ssl=1";
	constructor(
		private httpSvc: HttpService,
		@Inject(DOCUMENT) private document: Document,
		private pageInfoSvc: PageInfoService
	) {}

	ngOnInit() {
		this.pageTitle = this.title;
		const pathname = this.document.location.pathname;
		const opts = new InputRequestOption();
		opts.params = {
			url: pathname,
		};
		this.getInformationOfDepartment(opts);
		this.getDepartment_ProductCapacities(opts);
		this.getProductGroups(opts);
		this.setPageInformation(opts);
	}

	setPageInformation(opts) {
		this.httpSvc.get(API.Category.Get, opts).subscribe((response) => {
			const metaObject: MetaModel = {
				title: response.data.metaTitle,
				keywords: response.data.metaKeywords,
				description: response.data.metaDescription,
				image: response.data.metaImage,
			};
			this.pageInfoSvc.setTitle(response.data.title);
			this.pageInfoSvc.setMeta(metaObject);
			this.pageTitle = this.title;
		});

		this.httpSvc.get(API.Common.Breadcrumb, opts).subscribe((response) => {
			this.breadcrumbs = response.data;
		});
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
			const products = this.productGroups.filter(
				(item) => item.isPotential == false
			);
			if (products.length == 0) {
				this.isShowListProduct = false;
			} else {
				this.isShowListProduct = true;
			}
		});
	}
}
