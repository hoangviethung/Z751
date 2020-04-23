import { Injector, Injectable, OnInit } from '@angular/core'
import {
	Router,
	NavigationEnd,
	ActivationStart,
	RouterEvent,
} from '@angular/router'
import { AuthenticService } from '../authentication/authentic.service'
import { AppConsts, UrlConsts } from '../constant/AppConsts'
import { BaseComponent } from './base.component'
import { ServerDisconnectedService } from '../layout/server-disconnected/server-disconnected.service'
import {
	WaitingSyncHelper,
	WaitingSyncKeys,
} from '../helpers/waiting-sync-helper'
import { Title } from '@angular/platform-browser'
import { LayoutService } from 'angular-admin-lte'

@Injectable()
export abstract class AppBaseComponent extends BaseComponent implements OnInit {
	public layoutService: LayoutService

	public authenticSvc: AuthenticService
	public titleService: Title
	public serverDisconnectedSvc: ServerDisconnectedService
	public navigationSubscription

	public isCustomLayout: boolean

	constructor(injector: Injector) {
		super(injector)
		this.authenticSvc = injector.get(AuthenticService)
		this.serverDisconnectedSvc = injector.get(ServerDisconnectedService)
		this.titleService = injector.get(Title)
		this.layoutService = injector.get(LayoutService)

		this.navigationSubscription = this.routerSvc.events.subscribe(
			(e: any) => {
				if (e instanceof NavigationEnd) {
					if (
						WaitingSyncHelper.canExcute(
							WaitingSyncKeys.initAppBaseComponent
						)
					) {
						this.checkPermision()
					}

					this.configSvc.pushEvent(() => {
						let title = this.titleService.getTitle()
						title = title.replace(' - ' + AppConsts.appName, '')
						title = title.replace(' -', '')
						this.titleService.setTitle(
							title + ' - ' + AppConsts.appName
						)
					})
				}
			}
		)

		this.routerSvc.events.subscribe((event: RouterEvent) => {
			if (event instanceof ActivationStart) {
				this.isCustomLayout = !!event.snapshot.data.customLayout
			}
		})
	}

	logout() {
		this.authenticSvc.logout(() => {
			window.open(
				`${AppConsts.appAccountUrl}/${UrlConsts.urlLogin}`,
				'_self'
			)
		})
	}

	checkPermision() {
		let url = this.routerSvc.url.toLowerCase()
		if (url[0] === '/') {
			url = url.substring(1)
		}

		if (!url.startsWith(UrlConsts.urlLogin)) {
			this.authenticSvc.checkAccessToken((result) => {
				if (result.result < 0) {
					this.showError(
						'Phiên đăng nhập đã hết hạn. Vui lòng đăng nhập lại để tiếp tục'
					)
					this.logout()
				}
			})
		}
	}

	// tslint:disable-next-line: use-life-cycle-interface
	ngOnInit() {
		this.layoutService.isCustomLayout.subscribe((value: boolean) => {
			this.isCustomLayout = value
		})
	}
}
