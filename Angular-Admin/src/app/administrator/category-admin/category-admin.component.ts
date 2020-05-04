import { Component, OnInit } from '@angular/core'
import { CategoryModel } from 'src/_core/models/category.model'
import { CrudService } from 'src/_core/services/crud.service'
import { ApiConfig } from 'src/_core/configs/api'
import { Router } from '@angular/router'

@Component({
	selector: 'app-category-admin',
	templateUrl: './category-admin.component.html',
	styleUrls: ['./category-admin.component.scss'],
})
export class CategoryAdminComponent implements OnInit {
	categories: Array<CategoryModel>

	constructor(private crudSvc: CrudService, private router: Router) {}

	ngOnInit(): void {
		this.getCategories()
	}

	getCategories() {
		this.crudSvc
			.gets(ApiConfig.category.gets, { languageId: 1 })
			.subscribe((response) => {
				this.categories = response.data.items
			})
	}

	editCategory(id) {
		this.router.navigate([`/admin/category-admin/edit/${id}`])
	}

	deleteCategory(id: string) {
		this.crudSvc
			.delete(ApiConfig.category.delete, id)
			.subscribe((response) => {
				this.getCategories()
			})
	}
}
