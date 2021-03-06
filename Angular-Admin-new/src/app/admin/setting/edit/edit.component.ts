import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SettingModel } from 'src/app/_core/models/setting.model';
import { HttpService, InputRequestOption } from 'src/app/_core/services/http.service';
import { APIConfig } from 'src/app/_core/API-config';
import { ToastrService } from 'ngx-toastr';

@Component({
	selector: 'app-edit',
	templateUrl: './edit.component.html',
	styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
	@Input('setting') setting: SettingModel = new SettingModel();
	@Output('close') close: EventEmitter<boolean> = new EventEmitter<boolean>();

	constructor(
		private httpSvc: HttpService,
		private toastrSvc: ToastrService,
	) { }

	ngOnInit(): void {
	}

	closePopup(status) {
		this.close.emit(status)
	}

	updateSetting() {
		const params = new InputRequestOption();
		params.body = {
			key: this.setting.name,
			value: this.setting.value
		}
		this.httpSvc.post(APIConfig.Setting.Update, params)
			.subscribe((response) => {
				if (response.code === 200) {
					this.close.emit(false)
					this.toastrSvc.success(response.message);
				} else {
					this.toastrSvc.error(response.message);
				}
			})
	}
}
