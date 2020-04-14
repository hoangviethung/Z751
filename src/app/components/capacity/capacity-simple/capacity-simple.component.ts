import { Component, OnInit, Input } from "@angular/core";
import { Product } from "src/app/models/core/Product.model";

@Component({
	selector: "app-capacity-simple",
	templateUrl: "./capacity-simple.component.html",
	styleUrls: ["./capacity-simple.component.scss"],
})
export class CapacitySimpleComponent implements OnInit {
	@Input("capacity") capacity: Product;

	constructor() {}

	ngOnInit() {}
}
