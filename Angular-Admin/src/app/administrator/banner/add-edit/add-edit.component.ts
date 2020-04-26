import { Component, OnInit, Input } from '@angular/core'
import { BannerService } from '../banner.service'
import { HttpClient } from '@angular/common/http'

export class BannerModel {
	id: number
	name: string
	description: string
	link: string
	altImage: string
	resourcePath: string
	order: number
	isPublished: boolean
	isVideo: boolean
	languageId: number
}

@Component({
	selector: 'app-add-edit',
	templateUrl: './add-edit.component.html',
	styleUrls: ['./add-edit.component.scss'],
})
export class AddEditComponent implements OnInit {
	@Input() banner: BannerModel = new BannerModel()
	constructor(private bannerSvc: BannerService, private http: HttpClient) {}
	ngOnInit(): void {
		setTimeout(() => {
			this.bannerSvc
				.test({
					name: 'tets',
					description: 'string',
					link: 'string',
					altImage: 'string',
					resourcePath: 'string',
					order: 0,
					isPublished: true,
					isVideo: true,
					languageId: 1,
				})
				.subscribe((res) => {
					console.log(res)
				})
			console.log('1 done')

			this.bannerSvc
				.test({
					name: 'tets',
					description: 'string',
					link: 'string',
					altImage: 'string',
					resourcePath: 'string',
					order: 0,
					isPublished: true,
					isVideo: true,
					languageId: 0,
				})
				.subscribe((res) => {
					console.log(res)
				})
			console.log(' 2 done')
		}, 1000)
	}
	showValue() {}
}
