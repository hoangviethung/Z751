import { Component, OnInit } from '@angular/core';
import { IndexService } from '../index.service';

@Component({
	selector: 'app-index-products',
	templateUrl: './index-products.component.html',
	styleUrls: ['./index-products.component.scss']
})
export class IndexProductsComponent implements OnInit {

	categoryProductsList = [];

	constructor(
		private _indexSvc: IndexService
	) { }

	ngOnInit() {
		this.returnData();
	}

	returnData() {
		this.getListCategoryProduct();
	}

	getListCategoryProduct() {
		this._indexSvc.getListCategoryProduct().subscribe(result => {
			this.categoryProductsList = result.data
		});
	}
}
