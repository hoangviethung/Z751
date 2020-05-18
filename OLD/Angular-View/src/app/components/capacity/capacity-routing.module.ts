import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CapacityComponent } from "./capacity.component";
import { CapacityDetailComponent } from "./capacity-detail/capacity-detail.component";

const routes: Routes = [
	{
		path: ":capacityCategory",
		component: CapacityComponent,
	},
	{
		path: ":capacityCategory/:capacityTitle",
		component: CapacityDetailComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class CapacityRoutingModule {}
