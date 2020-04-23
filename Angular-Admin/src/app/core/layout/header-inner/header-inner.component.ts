import { Component, Input, Injector } from '@angular/core'
import { Router } from '@angular/router'
import { AuthenticService } from 'src/app/core/authentication/authentic.service'
import { UrlConsts, AppConsts } from 'src/app/core/constant/AppConsts'
import { inject } from '@angular/core/testing'
import { AppBaseComponent } from 'src/app/core/basecommon/app-base.component'
import { BaseComponent } from 'src/app/core/basecommon/base.component'

@Component({
	selector: 'app-header-inner',
	templateUrl: './header-inner.component.html',
})
export class HeaderInnerComponent extends AppBaseComponent {
	@Input() username: string
	@Input() imageUrl: string
	public serverImage: string = AppConsts.imageDataUrl

	constructor(injector: Injector, public authenticSvc: AuthenticService) {
		super(injector)
		this.username = authenticSvc.getSession().userName
		this.imageUrl = this.authenticSvc.getSession().imageUrl
		this.imageUrl = this.imageUrl
			? this.serverImage + this.imageUrl
			: '/assets/img/user2-160x160.jpg'
	}
}
