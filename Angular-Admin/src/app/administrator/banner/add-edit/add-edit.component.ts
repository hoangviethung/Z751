import { Component, OnInit } from '@angular/core'
import { BannerModel } from 'src/_core/models/banner.model'
import { ActivatedRoute, Router } from '@angular/router'
import { map } from 'rxjs/operators'
import { CrudService } from 'src/_core/services/crud.service'
import { ApiConfig } from 'src/_core/configs/api'

@Component({
	selector: 'app-add-edit',
	templateUrl: './add-edit.component.html',
	styleUrls: ['./add-edit.component.scss'],
})
export class AddEditComponent implements OnInit {
	banner: BannerModel = new BannerModel()
	isEdit = false

	constructor(
		private crudSvc: CrudService,
		private activatedRoute: ActivatedRoute,
		private router: Router
	) {}

	ngOnInit(): void {
		this.activatedRoute.params
			.pipe(map((params) => params.bannerid))
			.subscribe((bannerId) => {
				if (bannerId) {
					this.isEdit = true
					this.crudSvc
						.gets(ApiConfig.banner.gets, { languageId: 1 })
						.subscribe((result) => {
							this.banner = result.data.filter(
								(item) => item.id == bannerId
							)[0]
						})
				} else {
					this.isEdit = false
				}
			})
	}

	updateBanner() {
		this.crudSvc
			.update(ApiConfig.banner.update, this.banner)
			.subscribe((response) => {
				console.log(response)
				this.router.navigateByUrl('/admin/banner')
			})
	}

	addBanner() {
		this.crudSvc
			.add(ApiConfig.banner.add, this.banner)
			.subscribe((response) => {
				console.log(response)
				this.router.navigateByUrl('/admin/banner')
			})
	}
}
