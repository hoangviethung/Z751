import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { LanguageService } from "src/core/services/language.service";
import { PageInfoService } from "src/core/services/page-info.service";
import { HttpService } from "src/core/services/http.service";
import { ProductModel } from "src/core/models/Product.model";
import { BreadcrumbService } from "../_shared/breadcrumb/breadcrumb.service";
import { Category } from "src/core/models/Category.model";

@Component({
	selector: "app-department",
	templateUrl: "./department.component.html",
	styleUrls: ["./department.component.scss"],
})
export class DepartmentComponent implements OnInit {
	currentLanguage: string;
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
	departments: Array<Category>;
	categoryUrl: string;

	constructor(
		private languageSvc: LanguageService,
		private pageSvc: PageInfoService,
		private activatedRoute: ActivatedRoute,
		private httpSvc: HttpService,
		private breadcrumbSvc: BreadcrumbService
	) {
		
	}

	ngOnInit() {
		this.getProducts();
		this.getDepartmentList();
	}

	getProducts() {
		this.activatedRoute.params.subscribe((params) => {
			let Breadcrumb = {
				en: ["Home", "Departments"],
				vi: ["Trang chủ", "Đơn vị thành viên"],
			};
			this.breadcrumbSvc.setBreadcrumb(this.Breadcrumb);
			this.categoryUrl = params.departmentCategory;
			this.httpSvc
				.get(
					`assets/api/${this.currentLanguage}/department/${params.departmentCategory}.json`
				)
				.subscribe((result) => {
					this.pageSvc.setTitle(result.data.Title);
					this.title = result.data.Title;
					this.image = result.data.Image;
					this.description = result.data.Description;
					this.address = result.data.Information.Address;
					this.workTime = result.data.Information.WorkTime;
					this.designProducts = result.data.Products.DesignProducts;
					this.prepairProducts = result.data.Products.PrepairProducts;
					Breadcrumb[this.currentLanguage].push(result.data.Title);
					this.breadcrumbs = Breadcrumb[this.currentLanguage];
				});
		});
	}
	getDepartmentList() {
		this.httpSvc
			.get(
				`assets/api/${this.currentLanguage}/department/categories-department.json`
			)
			.subscribe((result) => {
				this.departments = result.data;
			});
	}
}
