import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SearchRoutingModule } from "./search-routing.module";
import { SearchComponent } from "./search.component";
import { SharedModule } from "../_shared/shared.module";

@NgModule({
	declarations: [SearchComponent],
	imports: [SearchRoutingModule, SharedModule],
})
export class SearchModule {}
