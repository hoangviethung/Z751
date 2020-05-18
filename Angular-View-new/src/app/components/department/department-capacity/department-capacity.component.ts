import { Component, OnInit, Input } from "@angular/core";
import { HttpService } from "src/core/services/http.service";
import { ProductModel } from "src/core/models/Product.model";

@Component({
	selector: "app-department-capacity",
	templateUrl: "./department-capacity.component.html",
	styleUrls: ["./department-capacity.component.scss"],
})
export class DepartmentCapacityComponent implements OnInit {
	capacities: Array<ProductModel> = [];
	@Input("language") currentLanguage: string;

	constructor(private httpSvc: HttpService) {}

	ngOnInit() {
		// this.getCapacities();
	}

	getCapacities() {
		const url =
			this.currentLanguage == "en"
				? `assets/api/${this.currentLanguage}/capacity/equipment-and-software-supporting-research-and-design.json`
				: `assets/api/${this.currentLanguage}/capacity/nhom-thiet-bi-gia-cong-ap-luc-va-ket-cau-thep.json`;
		this.httpSvc.get(url).subscribe((result) => {
			this.capacities = result.data.Products;
		});
	}
}
