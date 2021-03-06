import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { LanguageService } from "src/app/services/language.service";
import { PageInfoService } from "src/app/services/page-info.service";
import { HttpService } from "src/app/services/http.service";
import { Product } from "src/app/models/core/Product.model";
import { BreadcrumbService } from "../_shared/breadcrumb/breadcrumb.service";
import { Category } from "src/app/models/core/Category.model";

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
	designProducts: Array<Product>;
	prepairProducts: Array<Product>;
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
		this.currentLanguage = this.languageSvc.getCurrentLanguage();
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
