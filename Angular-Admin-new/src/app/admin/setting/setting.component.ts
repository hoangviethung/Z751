import { Component, Injector, OnInit } from '@angular/core';
import { SettingModel } from 'src/app/_core/models/setting.model';
import { HttpService } from 'src/app/_core/services/http.service';
import { APIConfig } from 'src/app/_core/API-config';
import { AuthenticationComponent } from '../../_core/components/base/authentication.component';
import { Permissions } from '../../_core/enums/role.enum';
import { map } from 'rxjs/operators';

export const SettingType = {
	0: 'Thông tin SMTP',
	1: 'Liên kết xã hội',
	2: 'Recaptcha',
};

@Component({
	selector: 'app-setting',
	templateUrl: './setting.component.html',
	styleUrls: ['./setting.component.scss'],
})
export class SettingComponent extends AuthenticationComponent
	implements OnInit {
	public featureName: string = 'ManageSetting';
	public permissions = Permissions;

	isShowPopup: boolean = false;
	settings: Array<SettingModel>;
	setting: SettingModel;
	constructor(injector: Injector, private httpSvc: HttpService) {
		super(injector);
	}

	ngOnInit(): void {
		this.getSettings();
	}

	getSettings() {
		this.httpSvc
			.get(APIConfig.Setting.Gets)
			.pipe(
				map((response) => {
					const newResponse = response.data.map((item) => {
						let setting = item;
						setting.type = SettingType[item.type];
						return setting;
					});
					response.data = newResponse;
					return response;
				})
			)
			.subscribe((response) => {
				this.settings = response.data;
			});
	}

	onOpenPopup(status, setting?) {
		this.isShowPopup = status;
		this.setting = setting;
	}

	onClosePopup(status: boolean) {
		this.isShowPopup = status;
		this.getSettings();
	}
}
