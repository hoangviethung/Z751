import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { UserModel } from 'src/app/_core/models/user.model';
import {
	InputRequestOption,
	HttpService,
} from 'src/app/_core/services/http.service';
import { TemplatesConfig } from 'src/app/_core/templates-config';
import { APIConfig } from 'src/app/_core/API-config';
import { map } from 'rxjs/operators';
import { RoleModel } from 'src/app/_core/models/role.model';
import { RegisterUserModel } from 'src/app/_core/models/register-user.model';
import { ToastrService } from 'ngx-toastr';
import { TemplateModel } from 'src/app/_core/models/template.model';
import { FormControl } from '@angular/forms';
import { async } from '@angular/core/testing';

@Component({
	selector: 'app-add-edit',
	templateUrl: './add-edit.component.html',
	styleUrls: ['./add-edit.component.scss'],
})
export class AddEditComponent implements OnInit {
	roles: Array<RoleModel>;
	@Input('user') user: RegisterUserModel = new RegisterUserModel();
	@Input('isEdit') isEdit: boolean;
	@Output('close') close: EventEmitter<boolean> = new EventEmitter<boolean>();
	templates: Array<TemplateModel> = TemplatesConfig;
	templatesControl = new FormControl();
	constructor(
		private httpSvc: HttpService,
		private toastrSvc: ToastrService
	) {}

	ngOnInit(): void {
		this.getRoles();
		// this.templatesControl. = this.user.roles
	}

	getRoles() {
		this.httpSvc
			.get(APIConfig.Role.Gets)
			.pipe(map((response) => response.data))
			.subscribe((roles) => {
				this.roles = roles;
			});
	}

	addUser() {
		const params = new InputRequestOption();
		params.body = this.user;
		this.httpSvc.post(APIConfig.User.Add, params).subscribe((response) => {
			if (response.code === 200) {
				this.close.emit(false);
				this.toastrSvc.success('Thêm mới thành công !!!');
			} else {
				this.toastrSvc.error('Đã có lỗi xảy ra khi thêm mới !!!');
			}
		});
	}

	updateUser() {
		const params = new InputRequestOption();
		params.body = this.user;
		this.httpSvc
			.post(APIConfig.User.Update, params)
			.subscribe((response) => {
				if (response.code === 200) {
					const option = new InputRequestOption();
					option.params = {
						userName: this.user.userName,
					};
					this.httpSvc
						.post(APIConfig.User.Active, option)
						.subscribe(() => {
							this.close.emit(false);
						});
					this.toastrSvc.success('Chỉnh sửa thành công !!!');
				} else {
					this.toastrSvc.error('Đã có lỗi xảy ra khi chỉnh sửa !!!');
				}
			});
	}

	closePopup(status) {
		this.close.emit(status);
	}
}
