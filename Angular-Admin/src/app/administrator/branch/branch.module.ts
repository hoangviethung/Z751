import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BranchRoutingModule } from './branch-routing.module';
import { BranchComponent } from './branch.component';
import { AddEditComponent } from './add-edit/add-edit.component';


@NgModule({
	declarations: [BranchComponent, AddEditComponent],
	imports: [
		CommonModule,
		BranchRoutingModule
	]
})
export class BranchModule { }
