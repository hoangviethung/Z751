import { Component, OnInit } from '@angular/core'
import { BannerModel } from 'src/_core/models/banner.model'
import { Router } from '@angular/router'
import { CrudService } from 'src/_core/services/crud.service'
import { ApiConfig } from 'src/_core/configs/api'
import { BannerService } from './banner.service'
import { map } from 'rxjs/operators'
import { LanguageService } from 'src/_core/services/language.service'
import { LanguageModel } from 'src/_core/models/language'

@Component({
	selector: 'app-banner',
	templateUrl: './banner.component.html',
	styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit {
	banners: Array<BannerModel> = []
	languages: Array<LanguageModel>

	constructor(
		private router: Router,
		private crudSvc: CrudService,
		private bannerSvc: BannerService,
		private languageSvc: LanguageService
	) { }

	ngOnInit(): void {
		this.getBanners()
		this.getLanguages()
	}

	getLanguages() {
		this.languageSvc.getLanguages().subscribe((languages) => {
			this.languages = languages
			this.languageSvc.setLanguages(languages)
		})
	}

	getBanners(id: string = '1') {
		this.crudSvc
			.gets(ApiConfig.banner.gets, { languageId: id })
			.pipe(map((response) => response.data))
			.subscribe((banners) => {
				this.banners = banners
				this.bannerSvc.setBanners(banners)
			})
	}
	fetchBanner(e) {
		this.getBanners(e.target.value)
	}

	editBanner(id) {
		this.router.navigate([`/admin/banner/edit/${id}`])
	}

	deleteBanner(id) {
		this.crudSvc
			.delete(ApiConfig.banner.delete, id)
			.subscribe((response) => {
				this.getBanners()
			})
	}
}
