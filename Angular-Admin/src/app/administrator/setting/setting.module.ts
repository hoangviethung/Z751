import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { SettingRoutingModule } from './setting-routing.module'
import { SettingComponent } from './setting.component'
import { EditComponent } from './edit/edit.component'
import { SharedModule } from 'src/_core/shared/shared.module'

@NgModule({
	declarations: [SettingComponent, EditComponent],
	imports: [CommonModule, SettingRoutingModule, SharedModule],
})
export class SettingModule {}
