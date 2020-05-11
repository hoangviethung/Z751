import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BannerRoutingModule } from './banner-routing.module';
import { BannerComponent } from './banner.component';
import { AddEditComponent } from './add-edit/add-edit.component';
import { SharedModule } from 'src/app/_core/shared.module';

@NgModule({
	declarations: [BannerComponent, AddEditComponent],
	imports: [CommonModule, BannerRoutingModule, SharedModule],
})
export class BannerModule {}
