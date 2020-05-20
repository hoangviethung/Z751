import { NgModule } from '@angular/core';

import { SectionRoutingModule } from './section-routing.module';
import { SectionComponent } from './section.component';
import { EditComponent } from './edit/edit.component';
import { SharedModule } from 'src/app/_core/shared.module';

@NgModule({
	declarations: [SectionComponent, EditComponent],
	imports: [SharedModule, SectionRoutingModule],
})
export class SectionModule {}
