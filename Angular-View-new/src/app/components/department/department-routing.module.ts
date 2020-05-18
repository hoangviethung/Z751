import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DepartmentComponent } from "./department.component";

const routes: Routes = [
	{
		path: "",
		pathMatch: "full",
		component: DepartmentComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class DepartmentRoutingModule {}
