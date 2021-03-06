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
import { TemplateModel } from 'src/app/_core/models/template.model';
import { TemplatesConfig } from 'src/app/_core/templates-config';
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
	productsControl = new FormControl();
	languageControl = new FormControl();
	templates: Array<TemplateModel> = TemplatesConfig;
	titleError = false;
	constructor(
		private httpSvc: HttpService,
		private toastrSvc: ToastrService
	) {}

	ngOnInit(): void {
		this.getProducts(1);
		this.languages = JSON.parse(localStorage.getItem('languages'));
	}

	closePopup(status) {
		this.close.emit(status);
	}

	getProducts(event) {
		const params = new InputRequestOption();
		params.params = {
			languageId: event,
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
		if (this.productGroup.name == '' || this.productGroup.name == null) {
			this.titleError = true;
		} else {
			this.titleError = false;
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
						this.titleError = true;
						console.log(this.titleError);

						this.toastrSvc.error(response.message);
					}
				});
		}
	}

	addProdcutGroup() {
		this.productGroup.languageId = Number(this.productGroup.languageId);
		if (this.productGroup.name == '' || this.productGroup.name == null) {
			this.titleError = true;
		} else {
			this.titleError = false;
			
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
						this.titleError = true;
						this.toastrSvc.error(response.message);
					}
				});
		}
	}

	checkData() {
		// console.log('Danh sách các sản phẩm đã chọn:');
		// console.log(this.productsControl.value);
	}

	onChangeLanguage(e) {
		this.getProducts(e);
	}
}
