import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { AddEditComponent } from './add-edit/add-edit.component';
import { ChangepaswordComponent } from './changepasword/changepasword.component';
import { SharedModule } from 'src/app/_core/shared.module';


@NgModule({
	declarations: [UserComponent, AddEditComponent, ChangepaswordComponent],
	imports: [
		CommonModule,
		UserRoutingModule,
		SharedModule
	]
})
export class UserModule { }
