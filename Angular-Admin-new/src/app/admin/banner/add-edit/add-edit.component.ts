import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BannerModel } from 'src/app/_core/models/banner.model';
import { HttpService, InputRequestOption } from 'src/app/_core/services/http.service';
import { APIConfig } from 'src/app/_core/API-config';
import { LanguageModel } from 'src/app/_core/models/language';

@Component({
	selector: 'app-add-edit',
	templateUrl: './add-edit.component.html',
	styleUrls: ['./add-edit.component.scss']
})
export class AddEditComponent implements OnInit {
	@Input('banner') banner: BannerModel = new BannerModel()
	@Input('isEdit') isEdit: boolean
	@Output('close') close: EventEmitter<boolean> = new EventEmitter<boolean>()
	languages: Array<LanguageModel>
	constructor(
		private httpSvc: HttpService,
	) { }

	ngOnInit(): void {
		this.languages = JSON.parse(localStorage.getItem('dataLanguages'))
	}

	addBanner() {
		this.banner.languageId = Number(this.banner.languageId)
		const params = new InputRequestOption();
		params.body = this.banner
		this.httpSvc.post(APIConfig.Banner.Add, params)
			.subscribe(() => {
				this.close.emit(false)
			})
	}

	updateBanner() {
		this.banner.languageId = Number(this.banner.languageId)
		const params = new InputRequestOption();
		params.body = this.banner
		this.httpSvc.post(APIConfig.Banner.Update, params)
			.subscribe(() => {
				this.close.emit(false)
				console.log('Cập nhật thành công');
			})
	}

	closePopup(status) {
		this.close.emit(status)
	}
}
