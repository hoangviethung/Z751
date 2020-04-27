import { Component, OnInit } from '@angular/core'
import { BannerService } from '../banner.service'
import { BannerModel } from 'src/_core/models/banner.model'
import { ActivatedRoute, Router } from '@angular/router'
import { map, filter } from 'rxjs/operators'

@Component({
	selector: 'app-add-edit',
	templateUrl: './add-edit.component.html',
	styleUrls: ['./add-edit.component.scss'],
})
export class AddEditComponent implements OnInit {
	banner: BannerModel = new BannerModel()

	isEdit = {
		status: false,
		buttonText: 'Cập nhật',
	}

	constructor(
		private bannerSvc: BannerService,
		private activatedRoute: ActivatedRoute,
		private router: Router
	) {}

	ngOnInit(): void {
		this.activatedRoute.params
			.pipe(map((params) => params.bannerid))
			.subscribe((bannerId) => {
				if (bannerId) {
					this.isEdit.status = true
					this.bannerSvc
						.fetch({ languageId: 1 })
						.subscribe((result) => {
							this.banner = result.data.filter(
								(item) => item.id == bannerId
							)[0]
						})
				} else {
					this.isEdit.status = false
				}
			})
	}

	bannerAction(e) {
		this.banner.name = this.banner.resourcePath
		if (this.isEdit.status) {
			this.updateBanner(this.banner)
		} else {
			this.addBanner(this.banner)
		}
	}

	updateBanner(data: BannerModel) {
		this.bannerSvc.update(data).subscribe((response) => {
			this.router.navigateByUrl('/admin/banner')
		})
	}

	addBanner(data: BannerModel) {
		this.bannerSvc.add(data).subscribe((response) => {
			this.router.navigateByUrl('/admin/banner')
		})
	}
}
