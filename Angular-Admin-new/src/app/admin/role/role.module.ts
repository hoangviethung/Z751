import { NgModule } from '@angular/core';

import { RoleRoutingModule } from './role-routing.module';
import { RoleComponent } from './role.component';
import { AddEditComponent } from './add-edit/add-edit.component';
import { SharedModule } from 'src/app/_core/shared.module';

@NgModule({
	declarations: [RoleComponent, AddEditComponent],
	imports: [RoleRoutingModule, SharedModule],
})
export class RoleModule {}
