import { Component, OnInit } from '@angular/core';
import { SettingModel } from 'src/app/_core/models/setting.model';
import { HttpService } from 'src/app/_core/services/http.service';
import { APIConfig } from 'src/app/_core/API-config';

@Component({
	selector: 'app-setting',
	templateUrl: './setting.component.html',
	styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {
	isShowPopup: boolean = false;
	settings: Array<SettingModel>;
	setting: SettingModel
	constructor(
		private httpSvc: HttpService
	) { }

	ngOnInit(): void {
		this.getSettings()
	}

	getSettings() {
		this.httpSvc.get(APIConfig.Setting.Gets)
			.subscribe((response) => {
				console.log(response);
				this.settings = response.data
			})
	}

	onOpenPopup(status, setting?) {
		this.isShowPopup = status;
		this.setting = setting;
		console.log(this.setting);
	}

	onClosePopup(status: boolean) {
		this.isShowPopup = status;
		this.getSettings();
	}
}
