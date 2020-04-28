import { Component, OnInit } from '@angular/core'
import { BannerService } from './banner.service'
import { BannerModel } from 'src/_core/models/banner.model'
import { Router } from '@angular/router'
import { CrudService } from 'src/_core/services/crud.service'
import { ApiConfig } from 'src/_core/configs/api'

@Component({
	selector: 'app-banner',
	templateUrl: './banner.component.html',
	styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit {
	banners: Array<BannerModel>

	constructor(
		private bannerSvc: BannerService,
		private router: Router,
		private crudSvc: CrudService
	) {}

	ngOnInit(): void {
		this.getBanners()
	}

	getBanners() {
		this.crudSvc
			.fetch(ApiConfig.banner.gets, { languageId: 1 })
			.subscribe((response) => {
				this.banners = response.data
				this.bannerSvc.banners = this.banners
			})
	}

	editBanner(id) {
		this.router.navigate([`/admin/banner/edit/${id}`])
	}

	deleteBanner(id) {
		this.crudSvc
			.delete(ApiConfig.banner.delete, id)
			.subscribe((response) => {
				console.log(response)
				this.getBanners()
			})
	}
}
