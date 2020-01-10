import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivitiesRoutingModule } from './activities-routing.module';
import { ActivitiesComponent } from './activities.component';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
	declarations: [
		ActivitiesComponent
	],
	imports: [
		CommonModule,
		ActivitiesRoutingModule,
		TranslateModule.forChild()
	]
})
export class ActivitiesModule { }
