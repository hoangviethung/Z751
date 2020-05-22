import { Component, OnInit } from '@angular/core';
import { ProductGroupModel } from 'src/app/_core/models/product-groups';
import {
	HttpService,
	InputRequestOption,
} from 'src/app/_core/services/http.service';
import { APIConfig } from 'src/app/_core/API-config';
import { map } from 'rxjs/operators';
import { LanguageModel } from 'src/app/_core/models/language';
import { ToastrService } from 'ngx-toastr';
import { TemplateModel } from 'src/app/_core/models/template.model';
import { TemplatesConfig } from 'src/app/_core/templates-config';
import { FormControl } from '@angular/forms';
@Component({
	selector: 'app-product-groups',
	templateUrl: './product-groups.component.html',
	styleUrls: ['./product-groups.component.scss'],
})
export class ProductGroupsComponent implements OnInit {
	isShowPopup: boolean = false;
	isEdit: boolean;
	languages: Array<LanguageModel>;
	productGroups: Array<ProductGroupModel>;
	productGroup: ProductGroupModel;
	templates: Array<TemplateModel> = TemplatesConfig;
	languageControl = new FormControl();
	constructor(
		private httpSvc: HttpService,
		private toastrSvc: ToastrService
	) {}

	ngOnInit(): void {
		this.getProductGroups();
		this.languages = JSON.parse(localStorage.getItem('languages'));
	}

	getProductGroups(languageId?) {
		const params = new InputRequestOption();
		if (languageId) {
			params.params = {
				languageId: languageId,
			};
		} else {
			params.params = {
				languageId: '1',
			};
		}

		this.httpSvc
			.get(APIConfig.ProductGroup.Gets, params)
			.pipe(map((response) => response.data))
			.subscribe((prodcutGroups) => {
				this.productGroups = prodcutGroups;
			});
	}

	onOpenPopup(status, itemEdit?, isEdit?) {
		this.isShowPopup = status;
		if (itemEdit) {
			this.productGroup = itemEdit;
			this.isEdit = isEdit;
		} else {
			this.productGroup = new ProductGroupModel();
			this.isEdit = false;
		}
	}

	onClosePopup(status: boolean) {
		this.isShowPopup = status;
		this.getProductGroups();
	}

	deleteProductGroup(id) {
		const params = new InputRequestOption();
		params.params = {
			id: id,
		};
		this.httpSvc
			.post(APIConfig.ProductGroup.Delete, params)
			.subscribe((response) => {
				if (response.code == 200) {
					this.toastrSvc.success(response.message);
					this.getProductGroups();
				} else {
					this.toastrSvc.error(response.message);
				}
			});
	}

	fetchProductGroup(e) {
		this.getProductGroups(e);
	}
}
