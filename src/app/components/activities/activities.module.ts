import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivitiesRoutingModule } from './activities-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { ActivitiesImageComponent } from './activities-image/activities-image.component';
import { ActivitiesVideoComponent } from './activities-video/activities-video.component';


@NgModule({
	declarations: [
		ActivitiesImageComponent,
		ActivitiesVideoComponent
	],
	imports: [
		CommonModule,
		ActivitiesRoutingModule,
		TranslateModule.forChild()
	]
})
export class ActivitiesModule { }
