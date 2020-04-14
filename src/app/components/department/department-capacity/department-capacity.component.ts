import { Component, OnInit, Input } from "@angular/core";
import { HttpService } from "src/app/services/http.service";
import { Product } from "src/app/models/core/Product.model";

@Component({
	selector: "app-department-capacity",
	templateUrl: "./department-capacity.component.html",
	styleUrls: ["./department-capacity.component.scss"],
})
export class DepartmentCapacityComponent implements OnInit {
	capacities: Array<Product> = [];
	@Input("language") currentLanguage: string;

	constructor(private httpSvc: HttpService) {}

	ngOnInit() {
		this.getCapacities();
	}

	getCapacities() {
		const url =
			this.currentLanguage == "en"
				? `assets/api/${this.currentLanguage}/capacity/equipment-and-software-supporting-research-and-design.json`
				: `assets/api/${this.currentLanguage}/capacity/nhom-thiet-bi-gia-cong-ap-luc-va-ket-cau-thep.json`;
		this.httpSvc.get(url).subscribe((result) => {
			this.capacities = result.Data.Products;
		});
	}
}
