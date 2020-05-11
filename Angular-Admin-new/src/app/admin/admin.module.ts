import { NgModule } from '@angular/core';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AsideMenuComponent } from '../_core/components/aside-menu/aside-menu.component';
import { SharedModule } from '../_core/shared.module';

@NgModule({
	declarations: [AdminComponent, AsideMenuComponent],
	imports: [AdminRoutingModule, SharedModule],
})
export class AdminModule { }
