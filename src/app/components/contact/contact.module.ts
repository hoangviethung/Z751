import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { TranslateModule } from '@ngx-translate/core';
import { MapComponent } from '../_shared/map/map.component';
import { AgmCoreModule } from '@agm/core';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
	declarations: [
		ContactComponent,
		MapComponent
	],
	imports: [
		SharedModule,
		CommonModule,
		ContactRoutingModule,
		TranslateModule.forChild(),
		AgmCoreModule.forRoot({
			apiKey: "AIzaSyAq6ag0zUMblc-Wk5Z5S8KWkHpT3ak1LzI",
			libraries: ["places", "geometry"]
		})
	]
})
export class ContactModule { }
