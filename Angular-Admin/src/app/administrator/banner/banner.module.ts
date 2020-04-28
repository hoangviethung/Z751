import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { BannerRoutingModule } from './banner-routing.module'
import { BannerComponent } from './banner.component'
import { AddEditComponent } from './add-edit/add-edit.component'
import { FormsModule } from '@angular/forms'
import { SharedModule } from 'src/_core/shared/shared.module'

@NgModule({
	declarations: [BannerComponent, AddEditComponent],
	imports: [CommonModule, BannerRoutingModule, FormsModule, SharedModule],
	bootstrap: [BannerComponent],
})
export class BannerModule {}
