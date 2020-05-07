import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { MenuRoutingModule } from './menu-routing.module'
import { MenuComponent } from './menu.component';
import { AddEditComponent } from './add-edit/add-edit.component'
import { SharedModule } from 'src/_core/shared/shared.module'

@NgModule({
	declarations: [MenuComponent, AddEditComponent],
	imports: [CommonModule, MenuRoutingModule, SharedModule],
	bootstrap: [MenuComponent],
})
export class MenuModule { }
