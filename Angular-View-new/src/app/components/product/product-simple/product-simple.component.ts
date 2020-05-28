import { Component, OnInit, Input } from "@angular/core";
import { ProductModel } from "src/core/models/Product.model";

@Component({
	selector: "app-product-simple",
	templateUrl: "./product-simple.component.html",
	styleUrls: ["./product-simple.component.scss"],
})
export class ProductSimpleComponent implements OnInit {
	@Input() product: ProductModel;
	defaultImage =
		"https://i1.wp.com/www.uminahairandbeauty.com.au/wp-content/uploads/2018/08/background-wallpaper-noisy-gray-light-and-white-color-small-random-spots-texture.jpg?fit=256%2C256&ssl=1";
	constructor() {}

	ngOnInit() {}
}
