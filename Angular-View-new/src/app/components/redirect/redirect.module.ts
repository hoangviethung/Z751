import { NgModule } from "@angular/core";

import { RedirectRoutingModule } from "./redirect-routing.module";
import { RedirectComponent } from "./redirect.component";
import { SharedModule } from "../_shared/shared.module";

@NgModule({
	declarations: [RedirectComponent],
	imports: [RedirectRoutingModule, SharedModule],
})
export class RedirectModule {}
