import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/_core/services/crud.service';
import { APIConfig } from 'src/app/_core/API-config';
import { InputRequestOption } from 'src/app/_core/services/http.service';
import { LanguageModel } from 'src/app/_core/models/language';
import { UtilService } from 'src/app/_core/services/util.service';
import { FilterSearchModel } from 'src/app/_core/models/filter.model';
import { ProductModel } from 'src/app/_core/models/product.model';
import { ToastrService } from 'ngx-toastr';
import { TemplateModel } from 'src/app/_core/models/template.model';
import { TemplatesConfig } from 'src/app/_core/templates-config';
import { FormControl } from '@angular/forms';
@Component({
	selector: 'app-product',
	templateUrl: './product.component.html',
	styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
	languages: LanguageModel[] = [];
	search: FilterSearchModel = new FilterSearchModel();
	products: ProductModel[] = [];
	templates: Array<TemplateModel> = TemplatesConfig;
	languageControl = new FormControl();
	constructor(
		private crudSvc: CrudService,
		private utilSvc: UtilService,
		private toastrSvc: ToastrService
	) { }

	ngOnInit(): void {
		this.languages = this.utilSvc.getLanguages();
		this.getProducts();
	}

	filterProduct() {
		const options = new InputRequestOption();
		options.params = {
			languageId: this.search.languageId,
			text: this.search.keywords || '',
		};
		this.crudSvc
			.get(APIConfig.Product.Gets, options)
			.subscribe((response) => {
				this.products = response.data.items;
			});
	}

	getProducts(e?) {
		const options = new InputRequestOption();
		if (e) {
			options.params = {
				languageId: e.target.value,
			};
		} else {
			options.params = {
				languageId: '1',
			};
		}
		this.crudSvc
			.get(APIConfig.Product.Gets, options)
			.subscribe((response) => {
				console.log(response.data.items);
				this.products = response.data.items;
			});
	}

	deleteProduct(id: string) {
		const options = new InputRequestOption();
		options.params = {
			id: id,
		};
		this.crudSvc
			.delete(APIConfig.Product.Delete, options)
			.subscribe((response) => {
				if (response.code == 200) {
					this.getProducts();
					this.toastrSvc.success(response.message);
				} else {
					this.toastrSvc.error(response.message);
				}
			});
	}
}
