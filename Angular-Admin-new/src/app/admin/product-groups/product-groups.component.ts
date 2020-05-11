import { Component, OnInit } from '@angular/core';
import { ProductGroupModel } from 'src/app/_core/models/product-groups';
import { HttpService, InputRequestOption } from 'src/app/_core/services/http.service';
import { APIConfig } from 'src/app/_core/API-config';
import { map } from 'rxjs/operators';

@Component({
	selector: 'app-product-groups',
	templateUrl: './product-groups.component.html',
	styleUrls: ['./product-groups.component.scss']
})
export class ProductGroupsComponent implements OnInit {
	isShowPopup: boolean = false;
	isEdit: boolean;
	productGroups: Array<ProductGroupModel>
	productGroup: ProductGroupModel
	constructor(
		private httpSvc: HttpService
	) { }

	ngOnInit(): void {
		this.getProductGroups();
	}

	getProductGroups() {
		const params = new InputRequestOption();
		params.params = {
			languageId: '1'
		}
		this.httpSvc.get(APIConfig.ProductGroup.Gets, params)
			.pipe(map((response) => response.data))
			.subscribe((prodcutGroups) => {
				this.productGroups = prodcutGroups
				console.log('Danh sách các nhóm sản phẩm:');
				console.log(this.productGroups);
			})
	}

	onOpenPopup(status, itemEdit?, isEdit?) {
		this.isShowPopup = status;
		if (itemEdit) {
			this.productGroup = itemEdit;
			this.isEdit = isEdit
		} else {
			this.productGroup = new ProductGroupModel();
			this.isEdit = false
		}
	}

	onClosePopup(status: boolean) {
		this.isShowPopup = status;
	}

	deleteProductGroup(id) {
		const params = new InputRequestOption()
		params.params = {
			id: id,
		}
		this.httpSvc.post(APIConfig.ProductGroup.Delete, params)
			.subscribe(() => {
				this.getProductGroups()
			})
	}
}
