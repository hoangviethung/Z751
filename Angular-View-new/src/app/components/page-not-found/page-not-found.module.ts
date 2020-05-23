import { NgModule } from "@angular/core";

import { PageNotFoundRoutingModule } from "./page-not-found-routing.module";
import { PageNotFoundComponent } from "./page-not-found.component";
import { SharedModule } from "../_shared/shared.module";
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
	declarations: [PageNotFoundComponent],
	imports: [
		PageNotFoundRoutingModule,
		SharedModule,
		TranslateModule.forChild(),
	],
})
export class PageNotFoundModule {}
