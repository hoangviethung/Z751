import { NgModule } from "@angular/core";

import { CapacityRoutingModule } from "./capacity-routing.module";
import { CapacityComponent } from "./capacity.component";
import { CapacityDetailComponent } from "./capacity-detail/capacity-detail.component";
import { CapacitySimpleComponent } from "./capacity-simple/capacity-simple.component";
import { SharedModule } from "../_shared/shared.module";
import { CapacityOthersComponent } from "./capacity-detail/capacity-others/capacity-others.component";
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
	declarations: [
		CapacityComponent,
		CapacityDetailComponent,
		CapacitySimpleComponent,
		CapacityOthersComponent,
	],
	imports: [CapacityRoutingModule, SharedModule, TranslateModule.forChild()],
})
export class CapacityModule {}
