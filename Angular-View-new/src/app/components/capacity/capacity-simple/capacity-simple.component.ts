import { Component, OnInit, Input } from "@angular/core";
import { ProductModel } from "src/core/models/Product.model";

@Component({
	selector: "app-capacity-simple",
	templateUrl: "./capacity-simple.component.html",
	styleUrls: ["./capacity-simple.component.scss"],
})
export class CapacitySimpleComponent implements OnInit {
	@Input("capacity") capacity: ProductModel;

	constructor() {}

	ngOnInit() {}
}
