import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BranchRoutingModule } from './branch-routing.module';
import { BranchComponent } from './branch.component';
import { AddEditComponent } from './add-edit/add-edit.component';
import { SharedModule } from 'src/_core/shared/shared.module';


@NgModule({
	declarations: [BranchComponent, AddEditComponent],
	imports: [
		CommonModule,
		BranchRoutingModule,
		SharedModule
	]
})
export class BranchModule { }
