import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivitiesRoutingModule } from './activities-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { ActivitiesImageComponent } from './activities-image/activities-image.component';
import { ActivitiesVideoComponent } from './activities-video/activities-video.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
	declarations: [
		ActivitiesImageComponent,
		ActivitiesVideoComponent
	],
	imports: [
		CommonModule,
		SharedModule,
		ActivitiesRoutingModule,
		TranslateModule.forChild()
	]
})
export class ActivitiesModule { }
