import { Component, Injector, Input, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { LoginService } from './login.service'
import { LoginModel } from './login.model'
import { BaseComponent } from '../../../core/basecommon/base.component'
import { AuthenticService } from '../../../core/authentication/authentic.service'
import { UrlConsts } from '../../../core/constant/AppConsts'
import { ResultCode } from '../../../core/constant/AppEnums'
import { DeviceDetectorService } from 'ngx-device-detector'

@Component({
	selector: 'app-login',
	templateUrl: 'login.component.html',
	styleUrls: ['login.component.scss'],
})
export class LoginComponent extends BaseComponent {
	@Input() VM: LoginModel
	@Input() msgUsr: string = ''
	@Input() msgPwd: string = ''
	@Input() message: string = ''
	@Input() isLoading: boolean = false
	deviceInfo = null

	constructor(
		injector: Injector,
		public loginSvc: LoginService,
		public router: Router,
		public authenticSvc: AuthenticService,
		public deviceService: DeviceDetectorService
	) {
		super(injector)
		this.VM = new LoginModel()
		this.onKey = this.onKey.bind(this)
		this.onCheckDataValidation = this.onCheckDataValidation.bind(this)
	}

	ngOnInit() {
		this.VM.deviceInfo = JSON.stringify(this.deviceService.getDeviceInfo())
		this.VM.appName = 'AriFEApp'

		if (this.authenticSvc.isAuthenticated()) {
			this.authenticSvc.logout(() => {})
		}
	}

	onKey(event: any) {
		if (event.keyCode == 13) {
			this.login()
		}
	}

	onCheckDataValidation(event: any, name: string = '') {
		let isPass = true
		if (name == 'username' || name == '')
			if (this.VM.userName == '' || this.VM.userName == null) {
				this.msgUsr = this.lang.instant('Login.UsernameIsRequired')
				isPass = false
			} else this.msgUsr = ''

		if (name == 'password' || name == '')
			if (this.VM.password == '' || this.VM.password == null) {
				this.msgPwd = this.lang.instant('Login.PasswordIsRequired')
				isPass = false
			} else this.msgPwd = ''
		return isPass
	}

	login() {
		if (!this.onCheckDataValidation(null)) return
		this.isLoading = true
		this.loginSvc.login(this.VM).subscribe(
			(result) => {
				this.isLoading = false
				let lang = this.langCurrent
				if (result.result == ResultCode.Success) {
					this.authenticSvc.saveSession(result.data)
					this.router.navigate([UrlConsts.urlHome])
				} else {
					this.message = result.errorMessage
				}
			},
			(error) => {
				this.isLoading = false
				this.message = this.lang.instant('Login.SystemNotResponding')
			}
		)
	}
}
