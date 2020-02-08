import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/shared/services/http.service';

@Component({
	selector: 'app-index-products',
	templateUrl: './index-products.component.html',
	styleUrls: ['./index-products.component.scss']
})
export class IndexProductsComponent implements OnInit {
	ProductCategoryUrl = 'assets/db/vi/category-product.json';
	categoryProduct = [];

	constructor(
		private httpSvc: HttpService
	) { }

	ngOnInit() {
		this.productCategory();
	}


	productCategory() {
		this.httpSvc.get(this.ProductCategoryUrl).subscribe(result => {
			this.categoryProduct = result.data
		});
	}
}
