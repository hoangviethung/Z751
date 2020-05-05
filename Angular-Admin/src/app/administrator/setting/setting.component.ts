import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/_core/services/crud.service';
import { ApiConfig } from 'src/_core/configs/api';
import { SettingModel } from 'src/_core/models/setting.model';

@Component({
	selector: 'app-setting',
	templateUrl: './setting.component.html',
	styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {
	settings: Array<SettingModel>
	constructor(
		private CruSvc: CrudService
	) { }

	ngOnInit(): void {
		this.getsSetting();
	}

	getsSetting() {
		console.log();

		this.CruSvc.gets(ApiConfig.setting.gets)
			.subscribe((response) => {
				console.log(response.data);
				this.settings = response.data
			})
	}
}
