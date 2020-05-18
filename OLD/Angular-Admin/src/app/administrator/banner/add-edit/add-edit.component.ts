import { Component, OnInit } from '@angular/core'
import { BannerModel } from 'src/_core/models/banner.model'
import { ActivatedRoute, Router } from '@angular/router'
import { map } from 'rxjs/operators'
import { CrudService } from 'src/_core/services/crud.service'
import { ApiConfig } from 'src/_core/configs/api'
import { BannerService } from '../banner.service'
import { LanguageService } from 'src/_core/services/language.service'
import { LanguageModel } from 'src/_core/models/language'

@Component({
	selector: 'app-add-edit',
	templateUrl: './add-edit.component.html',
	styleUrls: ['./add-edit.component.scss'],
})
export class AddEditComponent implements OnInit {
	banner: BannerModel = new BannerModel()
	isEdit = false
	languages: Array<LanguageModel>

	constructor(
		private crudSvc: CrudService,
		private activatedRoute: ActivatedRoute,
		private router: Router,
		private bannerSvc: BannerService,
		private languageSvc: LanguageService
	) { }

	ngOnInit(): void {
		this.getLanguages()
		this.getBanner()
	}

	getBanner() {
		this.activatedRoute.params
			.pipe(map((params) => params.bannerid))
			.subscribe((bannerId) => {
				if (bannerId) {
					this.isEdit = true
					this.bannerSvc
						.getBanners(ApiConfig.banner.gets)
						.subscribe((banners) => {
							this.banner = banners.find((item) => {
								return item.id == bannerId
							})
						})
				} else {
					this.isEdit = false
				}
			})
	}

	updateBanner() {
		this.crudSvc
			.update(ApiConfig.banner.update, this.banner)
			.subscribe(() => {
				this.router.navigateByUrl('/admin/banner')
			})
	}

	addBanner() {
		this.crudSvc
			.add(ApiConfig.banner.add, this.banner)
			.subscribe((response) => {
				this.router.navigateByUrl('/admin/banner')
			})
	}
	getLanguages() {
		this.languageSvc.getLanguages().subscribe((languages) => {
			this.languages = languages
		})
	}
}
