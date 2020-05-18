import { Component, OnInit } from '@angular/core'
import { CrudService } from 'src/_core/services/crud.service'
import { ApiConfig } from 'src/_core/configs/api'
import { map } from 'rxjs/operators'

@Component({
	selector: 'app-setting',
	templateUrl: './setting.component.html',
	styleUrls: ['./setting.component.scss'],
})
export class SettingComponent implements OnInit {
	settings: any
	setting: any
	constructor(private crudSvc: CrudService) {}

	ngOnInit(): void {
		this.getSettings()
	}

	getSettings() {
		this.crudSvc
			.gets(ApiConfig.setting.gets)
			.pipe(map((response) => response.data))
			.subscribe((response) => {
				this.settings = response
				console.log(this.settings)
			})
	}
	getSetting(setting) {
		this.setting = setting
	}
}
