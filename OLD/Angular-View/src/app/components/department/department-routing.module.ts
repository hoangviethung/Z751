import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DepartmentComponent } from "./department.component";
import { LocalizeRouterModule } from "@gilsdav/ngx-translate-router";

const routes: Routes = [
	{
		path: ":departmentCategory",
		component: DepartmentComponent,
	},
];

@NgModule({
	imports: [
		RouterModule.forChild(routes),
		LocalizeRouterModule.forChild(routes),
	],
	exports: [RouterModule, LocalizeRouterModule],
})
export class DepartmentRoutingModule {}
