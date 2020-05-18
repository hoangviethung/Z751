import { Component, OnInit, Input } from "@angular/core";
import { ProductModel } from "src/core/models/Product.model";

@Component({
	selector: "app-product-simple",
	templateUrl: "./product-simple.component.html",
	styleUrls: ["./product-simple.component.scss"],
})
export class ProductSimpleComponent implements OnInit {
	@Input() product: ProductModel;

	constructor() { }

	ngOnInit() { }
}
