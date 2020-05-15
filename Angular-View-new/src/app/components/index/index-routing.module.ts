import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { IndexComponent } from "./index.component";

const routes: Routes = [
	{
		path: "",
		pathMatch: "full",
		component: IndexComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class IndexRoutingModule {}
