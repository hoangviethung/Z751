import { Component, OnInit, Input } from '@angular/core'

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
	constructor() {}
	@Input() banner: BannerModel = new BannerModel()
	ngOnInit(): void {}
	showValue() {
		console.log(this.banner)
	}
}
