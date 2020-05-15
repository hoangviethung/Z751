import { Component, OnInit, Input } from "@angular/core";
import { HttpService } from "src/core/services/http.service";
import { ProductModel } from "src/core/models/Product.model";

@Component({
	selector: "app-index-products",
	templateUrl: "./index-products.component.html",
	styleUrls: ["./index-products.component.scss"],
})
export class IndexProductsComponent implements OnInit {
	productCategories: Array<ProductModel>;

	@Input("language") currentLanguage: string;

	constructor(private httpSvc: HttpService) {}

	ngOnInit() {
		this.productCategory();
	}

	productCategory() {
		this.httpSvc.get("/api/Category/used/get").subscribe((result) => {
			this.productCategories = result.data;
		});
	}
}
