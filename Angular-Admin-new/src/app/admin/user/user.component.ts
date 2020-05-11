import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/_core/services/http.service';
import { APIConfig } from 'src/app/_core/API-config';
import { map } from 'rxjs/operators';
import { UserModel } from 'src/app/_core/models/user.model';

@Component({
	selector: 'app-user',
	templateUrl: './user.component.html',
	styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
	users: Array<UserModel>;
	user: UserModel;
	isEdit: boolean;
	isShowPopupAddEdit: boolean = false;
	isShowPopupChangPass: boolean = false;
	constructor(
		private httpSvc: HttpService
	) { }

	ngOnInit(): void {
		this.getUsers();
	}

	getUsers() {
		this.httpSvc.get(APIConfig.User.Gets)
			.pipe(map((response) => response.data))
			.subscribe((users) => {
				this.users = users
				console.log(this.users);
			})
	}

	onOpenPopupAddEdit(status, itemEdit?, isEdit?) {
		this.isShowPopupAddEdit = status;
		if (itemEdit) {
			this.user = itemEdit;
			this.isEdit = isEdit
		} else {
			this.user = new UserModel();
			this.isEdit = false
		}
	}

	onOpenPopupChangePass(status, itemEdit) {
		this.isShowPopupChangPass = status;
		if (itemEdit) {
			this.user = itemEdit;
		} else {
			this.user = new UserModel();
			this.isEdit = false
		}
	}

	onClosePopup(status: boolean) {
		this.isShowPopupAddEdit = status;
		this.isShowPopupChangPass = status;
		this.getUsers();
	}
}
