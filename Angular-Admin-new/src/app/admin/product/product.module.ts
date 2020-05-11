import { NgModule } from '@angular/core';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { AddEditComponent } from './add-edit/add-edit.component';
import { SharedModule } from 'src/app/_core/shared.module';

@NgModule({
	declarations: [ProductComponent, AddEditComponent],
	imports: [ProductRoutingModule, SharedModule],
})
export class ProductModule {}
