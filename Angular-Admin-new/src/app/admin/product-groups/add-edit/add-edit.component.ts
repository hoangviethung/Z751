import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { InputRequestOption, HttpService } from 'src/app/_core/services/http.service';
import { APIConfig } from 'src/app/_core/API-config';
import { ProductModel } from 'src/app/_core/models/product.model';
import { map } from 'rxjs/operators';

@Component({
	selector: 'app-add-edit',
	templateUrl: './add-edit.component.html',
	styleUrls: ['./add-edit.component.scss']
})
export class AddEditComponent implements OnInit {
	@Input('productGroup') productGroup;
	@Input('isEdit') isEdit: boolean;
	@Output('close') close: EventEmitter<boolean> = new EventEmitter<boolean>();
	products: Array<ProductModel>
	constructor(
		private httpSvc: HttpService
	) { }

	ngOnInit(): void {
		this.getProducts();
		// this.languages = JSON.parse(localStorage.getItem('languages'))
	}

	closePopup(status) {
		this.close.emit(status)
	}

	getProducts() {
		const params = new InputRequestOption()
		params.params = {
			languageId: '1'
		}
		this.httpSvc.get(APIConfig.Product.Gets, params)
			.pipe(map((response) => response.data.items))
			.subscribe((products) => {
				this.products = products
				console.log('Danh sách sản phẩm hiện có:');
				console.log(this.products);
			})
	}

	updateProdcutGroup() {
		this.productGroup.languageId = Number(this.productGroup.languageId)
		const params = new InputRequestOption();
		params.body = this.productGroup
		this.httpSvc.post(APIConfig.ProductGroup.Update, params)
			.subscribe(() => {
				this.close.emit(false)
			})
	}

	addProdcutGroup() {
		const params = new InputRequestOption();
		params.body = this.productGroup
		this.httpSvc.post(APIConfig.ProductGroup.Add, params)
			.subscribe(() => {
				// this.close.emit(false)
			})
	}
}
