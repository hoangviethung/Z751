import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import {
	InputRequestOption,
	HttpService,
} from 'src/app/_core/services/http.service';
import { APIConfig } from 'src/app/_core/API-config';
import { ProductModel } from 'src/app/_core/models/product.model';
import { map } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { LanguageModel } from 'src/app/_core/models/language';
import { ProductGroupModel } from 'src/app/_core/models/product-groups';
import { ToastrService } from 'ngx-toastr';

@Component({
	selector: 'app-add-edit',
	templateUrl: './add-edit.component.html',
	styleUrls: ['./add-edit.component.scss'],
})
export class AddEditComponent implements OnInit {
	@Input('productGroup')
	productGroup: ProductGroupModel = new ProductGroupModel();
	@Input('isEdit') isEdit: boolean;
	@Output('close') close: EventEmitter<boolean> = new EventEmitter<boolean>();
	products: Array<ProductModel>;
	languages: Array<LanguageModel>;
	templatesControl = new FormControl();
	constructor(
		private httpSvc: HttpService,
		private toastrSvc: ToastrService
	) {}

	ngOnInit(): void {
		this.getProducts();
		this.languages = JSON.parse(localStorage.getItem('languages'));
	}

	closePopup(status) {
		this.close.emit(status);
	}

	getProducts() {
		const params = new InputRequestOption();
		params.params = {
			languageId: '1',
		};
		this.httpSvc
			.get(APIConfig.Product.Gets, params)
			.pipe(map((response) => response.data.items))
			.subscribe((products) => {
				this.products = products;
			});
	}

	updateProdcutGroup() {
		this.productGroup.languageId = Number(this.productGroup.languageId);
		const params = new InputRequestOption();
		params.body = this.productGroup;
		this.httpSvc
			.post(APIConfig.ProductGroup.Update, params)
			.subscribe((response) => {
				if (response.code == 200) {
					this.toastrSvc.success(response.message);
					this.close.emit(false);
				} else {
					this.toastrSvc.error(response.message);
				}
			});
	}

	addProdcutGroup() {
		const params = new InputRequestOption();
		this.productGroup.languageId = Number(this.productGroup.languageId);
		params.body = this.productGroup;
		this.httpSvc
			.post(APIConfig.ProductGroup.Add, params)
			.subscribe((response) => {
				if (response.code == 200) {
					this.close.emit(false);
					this.toastrSvc.success(response.message);
				} else {
					this.toastrSvc.error(response.message);
				}
			});
	}

	checkData() {}
}
