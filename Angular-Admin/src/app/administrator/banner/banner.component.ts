import { Component, OnInit } from '@angular/core'
import { BannerService } from './banner.service'
import { BannerModel } from 'src/_core/models/banner.model'
import { Router } from '@angular/router'

@Component({
	selector: 'app-banner',
	templateUrl: './banner.component.html',
	styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit {
	banners: Array<BannerModel>
	constructor(private bannerSvc: BannerService, private router: Router) {}

	ngOnInit(): void {
		this.getBanners()
	}
	getBanners() {
		this.bannerSvc.fetch({ languageId: 1 }).subscribe((response) => {
			this.banners = response.data
			this.bannerSvc.banners = this.banners
		})
	}

	editBanner(id) {
		this.router.navigate([`/admin/banner/edit/${id}`])
	}
	deleteBanner(id) {
		this.bannerSvc.delete(id).subscribe((result) => {
			console.log(result)
			this.getBanners()
		})
	}
}
