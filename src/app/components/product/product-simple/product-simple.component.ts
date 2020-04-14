import { Component, OnInit, Input } from "@angular/core";
import { Product } from "src/app/models/core/Product.model";

@Component({
	selector: "app-product-simple",
	templateUrl: "./product-simple.component.html",
	styleUrls: ["./product-simple.component.scss"],
})
export class ProductSimpleComponent implements OnInit {
	@Input() product: Product;

	constructor() {}

	ngOnInit() {}
}
