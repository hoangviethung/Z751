import { Component, OnInit, Input } from "@angular/core";
import { HttpService, InputRequestOption } from "src/core/services/http.service";
import { ProductModel } from "src/core/models/Product.model";
import { API } from 'src/core/configs/api';
import { Category } from 'src/core/models/Category.model';

@Component({
	selector: "app-index-products",
	templateUrl: "./index-products.component.html",
	styleUrls: ["./index-products.component.scss"],
})
export class IndexProductsComponent implements OnInit {
	productCategories: Array<Category>;
	@Input("language") currentLanguage: string;

	constructor(private httpSvc: HttpService) { }

	ngOnInit() {
		this.productCategory();
	}

	productCategory() {
		const option = new InputRequestOption();
		option.params = {
			templates: '3'
		}
		this.httpSvc.get(API.Category.Get_by_Templates, option).subscribe((result) => {
			this.productCategories = result.data;
			this.productCategories.shift();
		});
	}
}
