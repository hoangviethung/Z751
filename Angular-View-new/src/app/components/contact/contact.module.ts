import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ContactRoutingModule } from "./contact-routing.module";
import { ContactComponent } from "./contact.component";
import { MapComponent } from "../_shared/map/map.component";
import { AgmCoreModule } from "@agm/core";
import { SharedModule } from "../_shared/shared.module";

@NgModule({
	declarations: [ContactComponent, MapComponent],
	imports: [
		SharedModule,
		ContactRoutingModule,
		AgmCoreModule.forRoot({
			apiKey: "AIzaSyAq6ag0zUMblc-Wk5Z5S8KWkHpT3ak1LzI",
			libraries: ["places", "geometry"],
		}),
	],
})
export class ContactModule {}
