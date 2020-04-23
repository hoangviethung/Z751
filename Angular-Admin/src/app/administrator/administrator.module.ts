import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CoreLayoutModule } from 'src/app/core/layout/core-layout.module'
import { LoadingPageModule, MaterialBarModule } from 'angular-loading-page'
import { LayoutModule } from 'angular-admin-lte'

import { AdministratorRoutingModule } from './administrator-routing.module'
import { AdministratorComponent } from './administrator.component'
import { adminLteConf } from './admin-lte.conf'
import { AppConfigModule } from 'src/app/core/basecommon/app-config.module'
import { PageNotFoundComponent } from 'src/app/core/layout/page-not-found/page-not-found.component'
import { PageForbiddenComponent } from 'src/app/core/layout/page-forbidden/page-forbidden.component'
import { RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms'
import { LoadingModule } from '../core/loading/loading.module'

@NgModule({
	imports: [
		AppConfigModule,
		CommonModule,
		FormsModule,
		CoreLayoutModule,
		AdministratorRoutingModule,
		LayoutModule.forRoot(adminLteConf),
		LoadingPageModule,
		MaterialBarModule,
		RouterModule,
		LoadingModule,
	],
	declarations: [
		AdministratorComponent,
		PageNotFoundComponent,
		PageForbiddenComponent,
	],
	bootstrap: [AdministratorComponent],
})
export class AdministratorModule {}
