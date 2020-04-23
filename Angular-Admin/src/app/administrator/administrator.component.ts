import { Component, Injector } from '@angular/core'
import { LayoutStore } from 'angular-admin-lte'
import { AppBaseComponent } from '../../core/basecommon/app-base.component'
import { LoginType } from '../../core/constant/AppEnums'
import { adminLteConf } from './admin-lte.conf'
import { LoadingService } from '../../core/loading/loading.service'

@Component({
	selector: 'app-root',
	templateUrl: '../../core/layout/template/default.html',
	providers: [LoadingService],
})
export class AdministratorComponent extends AppBaseComponent {
	public customLayout: boolean = false

	constructor(injector: Injector, private layoutStore: LayoutStore) {
		super(injector)

		let session = this.authenticSvc.getSession()

		// Example for switch menu
		// if (session.type == LoginType.internalUser) {
		//   this.layoutStore.setSidebarLeftMenu(adminLteConf.sidebarInternalUserLeftMenu);
		// }
		// else {
		//   this.layoutStore.setSidebarLeftMenu(adminLteConf.sidebarContractorLeftMenu);
		// }
	}
}
