import {Component, OnInit, AfterViewInit, Injector} from '@angular/core';
import {
	HttpService,
	InputRequestOption,
} from 'src/app/_core/services/http.service';
import { APIConfig } from 'src/app/_core/API-config';
import { map } from 'rxjs/operators';
import { UserModel } from 'src/app/_core/models/user.model';
import { ToastrService } from 'ngx-toastr';
import { CookieService } from 'src/app/_core/services/cookie.service';
import {AuthenticationComponent} from "../../_core/components/base/authentication.component";
import {Permissions} from "../../_core/enums/role.enum";

@Component({
	selector: 'app-user',
	templateUrl: './user.component.html',
	styleUrls: ['./user.component.scss'],
})
export class UserComponent extends AuthenticationComponent implements OnInit {
	public featureName: string = 'ManageUsers';
	public permissions = Permissions;

	users: Array<UserModel>;
	user: UserModel;
	isEdit: boolean;
	isShowPopupAddEdit: boolean = false;
	isShowPopupChangPass: boolean = false;
	constructor(
		injector: Injector,
		private httpSvc: HttpService,
		private toastrSvc: ToastrService
	) {
		super(injector);
	}

	ngOnInit(): void {
		this.getUsers();
	}

	getUsers() {
		const responseCookieLogged = this.cookieSvc.get('user');
		const jsonCookieLogged = JSON.parse(responseCookieLogged);
		const userLogged = jsonCookieLogged.userName;
		this.httpSvc
			.get(APIConfig.User.Gets)
			.pipe(map((response) => response.data))
			.subscribe((users) => {
				this.users = users;
				this.users.forEach((item) => {
					if (item.userName == userLogged) {
						item.isDisabled = true;
					}
				});
				this.users = this.users.filter(
					(isDisabled) => isDisabled.isDisabled != true
				);
			});
	}

	deleteUser(id) {
		const params = new InputRequestOption();
		params.params = {
			userName: id,
		};
		this.httpSvc
			.post(APIConfig.User.Delete, params)
			.subscribe((response) => {
				if (response.code === 200) {
					this.getUsers();
					this.toastrSvc.success(response.message);
				} else {
					this.toastrSvc.error(response.message);
				}
			});
	}

	onOpenPopupAddEdit(status, itemEdit?, isEdit?) {
		this.isShowPopupAddEdit = status;
		if (itemEdit) {
			this.user = itemEdit;
			this.isEdit = isEdit;
		} else {
			this.user = new UserModel();
			this.isEdit = false;
		}
	}

	onOpenPopupChangePass(status, itemEdit) {
		this.isShowPopupChangPass = status;
		if (itemEdit) {
			this.user = itemEdit;
		} else {
			this.user = new UserModel();
			this.isEdit = false;
		}
	}

	onClosePopup(status: boolean) {
		this.isShowPopupAddEdit = status;
		this.isShowPopupChangPass = status;
		this.getUsers();
	}
}
