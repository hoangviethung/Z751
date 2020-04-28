import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { CategoryModel } from 'src/_core/models/category.model'
import { CrudService } from 'src/_core/services/crud.service'
import { ApiConfig } from 'src/_core/configs/api'

@Component({
	selector: 'app-add-edit',
	templateUrl: './add-edit.component.html',
	styleUrls: ['./add-edit.component.scss'],
})
export class AddEditComponent implements OnInit {
	category: CategoryModel = new CategoryModel()
	isEdit = {
		status: false,
	}

	constructor(private crudSvc: CrudService, private router: Router) {}

	ngOnInit(): void {}

	updateCategory() {
		this.crudSvc
			.update(ApiConfig.category.update, this.category)
			.subscribe((response) => {
				console.log(response)
				this.router.navigateByUrl('/admin/banner')
			})
	}

	addCategory() {
		// this.crudSvc.add(this.category).subscribe((response) => {
		// 	console.log(response)
		// 	this.router.navigateByUrl('/admin/banner')
		// })
	}
}
