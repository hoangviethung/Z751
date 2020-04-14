import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { LanguageService } from "src/app/services/language.service";
import { PageInfoService } from "src/app/services/page-info.service";
import { HttpService } from "src/app/services/http.service";
import { Product } from "src/app/models/core/Product.model";
import { BreadcrumbService } from "../_shared/breadcrumb/breadcrumb.service";

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
	}

	getProducts() {
		this.activatedRoute.params.subscribe((params) => {
			let Breadcrumb = {
				en: ["Home", "Departments"],
				vi: ["Trang chủ", "Đơn vị thành viên"],
			};
			this.breadcrumbSvc.setBreadcrumb(this.Breadcrumb);
			this.httpSvc
				.get(
					`assets/api/${this.currentLanguage}/department/${params.departmentCategory}.json`
				)
				.subscribe((result) => {
					this.pageSvc.setTitle(result.Data.Title);
					this.title = result.Data.Title;
					this.image = result.Data.Image;
					this.description = result.Data.Description;
					this.address = result.Data.Information.Address;
					this.workTime = result.Data.Information.WorkTime;
					this.designProducts = result.Data.Products.DesignProducts;
					this.prepairProducts = result.Data.Products.PrepairProducts;
					Breadcrumb[this.currentLanguage].push(result.Data.Title);
					this.breadcrumbs = Breadcrumb[this.currentLanguage];
				});
		});
	}
}
