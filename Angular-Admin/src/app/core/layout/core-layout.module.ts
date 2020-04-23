import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

import { BoxModule, TabsModule, DropdownModule } from 'angular-admin-lte'
import { SidebarLeftInnerComponent } from './sidebar-left-inner/sidebar-left-inner.component'
import { HeaderInnerComponent } from './header-inner/header-inner.component'
import { SidebarRightInnerComponent } from './sidebar-right-inner/sidebar-right-inner.component'
import { AlertComponent } from '../alert/alert.component'
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2'
import { ServerDisconnectedComponent } from './server-disconnected/server-disconnected.component'

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		DropdownModule,
		TabsModule,
		BoxModule,
		SweetAlert2Module,
	],
	declarations: [
		HeaderInnerComponent,
		SidebarLeftInnerComponent,
		SidebarRightInnerComponent,
		// AlertComponent,
		ServerDisconnectedComponent,
	],
	exports: [
		HeaderInnerComponent,
		SidebarLeftInnerComponent,
		SidebarRightInnerComponent,
		// AlertComponent,
		ServerDisconnectedComponent,
	],
})
export class CoreLayoutModule {}
