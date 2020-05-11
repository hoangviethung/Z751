import { Component, OnInit } from '@angular/core';
import { CategoryModel } from 'src/app/_core/models/category.model';
import { HttpService, InputRequestOption } from 'src/app/_core/services/http.service';
import { APIConfig } from 'src/app/_core/API-config';

@Component({
	selector: 'app-category',
	templateUrl: './category.component.html',
	styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
	isShowPopup: boolean = false;
	category: CategoryModel;
	isEdit: boolean;
	categories: Array<CategoryModel>;
	constructor(
		private httpSvc: HttpService
	) { }

	ngOnInit(): void {
		this.getCategories();
	}

	onOpenPopup(status, itemEdit?, isEdit?) {
		this.isShowPopup = status;
		if (itemEdit) {
			this.category = itemEdit;
			this.isEdit = isEdit
		} else {
			this.category = new CategoryModel();
			this.isEdit = false
		}
	}

	onClosePopup(status: boolean) {
		this.isShowPopup = status;
		this.getCategories()
	}

	getCategories() {
		const params = new InputRequestOption();
		params.params = {
			languageId: '1',
		}
		this.httpSvc.get(APIConfig.Category.Gets, params)
			.subscribe((categories) => {
				this.categories = categories.data.items
			})
	}

	deleteCategory(id) {
		const params = new InputRequestOption()
		params.params = {
			id: id,
		}
		this.httpSvc.post(APIConfig.Category.Delete, params)
			.subscribe(() => {
				this.getCategories()
			})
	}
}
