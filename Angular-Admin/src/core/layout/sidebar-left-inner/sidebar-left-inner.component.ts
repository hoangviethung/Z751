import { Component, OnInit, Input } from '@angular/core'
import { AuthenticService } from 'src/core/authentication/authentic.service'
import { AppConsts } from 'src/core/constant/AppConsts'

@Component({
	selector: 'app-sidebar-left-inner',
	templateUrl: './sidebar-left-inner.component.html',
	styleUrls: ['./sidebar-left-inner.component.scss'],
})
export class SidebarLeftInnerComponent {
	@Input() username: string
	@Input() imageUrl: string
	public serverImage: string = AppConsts.imageDataUrl

	constructor(public authenticSvc: AuthenticService) {
		this.username = this.authenticSvc.getSession().userName

		this.imageUrl = this.authenticSvc.getSession().imageUrl
		this.imageUrl = this.imageUrl
			? this.serverImage + this.imageUrl
			: '/assets/img/user2-160x160.jpg'
	}
}
