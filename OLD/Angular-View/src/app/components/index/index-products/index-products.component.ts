import { Component, OnInit, Input } from "@angular/core";
import { HttpService } from "src/app/services/http.service";
import { Product } from "src/app/models/core/Product.model";

@Component({
	selector: "app-index-products",
	templateUrl: "./index-products.component.html",
	styleUrls: ["./index-products.component.scss"],
})
export class IndexProductsComponent implements OnInit {
	productCategories: Array<Product>;

	@Input("language") currentLanguage: string;

	constructor(private httpSvc: HttpService) { }

	ngOnInit() {
		this.productCategory();
	}

	productCategory() {
		this.httpSvc.get('/api/Category/used/get').subscribe((result) => {
			this.productCategories = result.data;
		});
	}
}
