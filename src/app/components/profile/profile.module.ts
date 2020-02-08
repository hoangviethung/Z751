import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
	declarations: [
		ProfileComponent
	],
	imports: [
		SharedModule,
		CommonModule,
		ProfileRoutingModule,
		TranslateModule.forChild(),
	]
})
export class ProfileModule { }
