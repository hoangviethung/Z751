import { Component, OnInit, Input } from '@angular/core'
import { BannerService } from '../banner.service'
import { HttpClient } from '@angular/common/http'
import { BannerModel } from 'src/_core/models/banner.model'

@Component({
	selector: 'app-add-edit',
	templateUrl: './add-edit.component.html',
	styleUrls: ['./add-edit.component.scss'],
})
export class AddEditComponent implements OnInit {
	@Input() banner: BannerModel;

	constructor(private bannerSvc: BannerService, private http: HttpClient) { }

	ngOnInit(): void {
		setTimeout(() => { }, 1000)
	}

	showValue() { }
}
