import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { SectionRoutingModule } from './section-routing.module'
import { SectionComponent } from './section.component'
import { EditComponent } from './edit/edit.component'
import { SharedModule } from 'src/_core/shared/shared.module'
import { SectionService } from './section.service'

@NgModule({
	declarations: [SectionComponent, EditComponent],
	imports: [CommonModule, SectionRoutingModule, SharedModule],
	providers: [SectionService],
})
export class SectionModule {}
