import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { UserModel } from 'src/app/_core/models/user.model';
import { InputRequestOption, HttpService } from 'src/app/_core/services/http.service';
import { APIConfig } from 'src/app/_core/API-config';
import { map } from 'rxjs/operators';
import { RoleModel } from 'src/app/_core/models/role.model';
import { RegisterUserModel } from 'src/app/_core/models/register-user.model';

@Component({
	selector: 'app-add-edit',
	templateUrl: './add-edit.component.html',
	styleUrls: ['./add-edit.component.scss']
})
export class AddEditComponent implements OnInit {
	roles: Array<RoleModel>
	@Input('user') user: RegisterUserModel = new RegisterUserModel();
	@Input('isEdit') isEdit: boolean;
	@Output('close') close: EventEmitter<boolean> = new EventEmitter<boolean>();
	constructor(
		private httpSvc: HttpService
	) { }

	ngOnInit(): void {
		this.getRoles()
	}

	getRoles() {
		this.httpSvc.get(APIConfig.Role.Gets)
			.pipe(map((response) => response.data))
			.subscribe((roles) => {
				this.roles = roles
			})
	}

	addUser() {
		const params = new InputRequestOption();
		params.body = this.user
		this.httpSvc.post(APIConfig.User.Add, params)
			.subscribe(() => {
				this.close.emit(false)
			})
	}

	updateUser() {
		console.log(this.user);
		const params = new InputRequestOption();
		params.body = this.user
		this.httpSvc.post(APIConfig.User.Update, params)
			.subscribe(() => {
				this.close.emit(false)
			})
	}

	closePopup(status) {
		this.close.emit(status)
	}
}
