import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { CategoryAdminRoutingModule } from './category-admin-routing.module'
import { SharedModule } from 'src/_core/shared/shared.module'
import { CategoryAdminComponent } from './category-admin.component'
import { AddEditComponent } from './add-edit/add-edit.component'

@NgModule({
	declarations: [CategoryAdminComponent, AddEditComponent],
	imports: [CommonModule, CategoryAdminRoutingModule, SharedModule],
})
export class CategoryAdminModule {}
