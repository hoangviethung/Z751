import { NgModule } from '@angular/core';

import { CategoryRoutingModule } from './category-routing.module';
import { CategoryComponent } from './category.component';
import { SharedModule } from 'src/app/_core/shared.module';
import { AddEditComponent } from './add-edit/add-edit.component';

@NgModule({
	declarations: [CategoryComponent, AddEditComponent],
	imports: [CategoryRoutingModule, SharedModule],
})
export class CategoryModule {}
