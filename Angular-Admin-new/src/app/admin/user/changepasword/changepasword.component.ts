import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { PasswordUserModel } from 'src/app/_core/models/password-user.model';
import { InputRequestOption, HttpService } from 'src/app/_core/services/http.service';
import { APIConfig } from 'src/app/_core/API-config';

@Component({
	selector: 'app-changepasword',
	templateUrl: './changepasword.component.html',
	styleUrls: ['./changepasword.component.scss']
})
export class ChangepaswordComponent implements OnInit {
	@Input('user') user: PasswordUserModel = new PasswordUserModel();
	@Output('close') close: EventEmitter<boolean> = new EventEmitter<boolean>();
	constructor(
		private httpSvc: HttpService
	) { }

	ngOnInit(
	): void {
	}

	changePassword() {
		const params = new InputRequestOption();
		params.body = this.user
		this.httpSvc.post(APIConfig.User.Changepasword, params)
			.subscribe(() => {
				this.close.emit(false)
			})
	}

	closePopup(status) {
		this.close.emit(status)
	}
}
