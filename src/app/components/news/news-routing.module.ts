import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LocalizeRouterModule } from "@gilsdav/ngx-translate-router";
import { NewsComponent } from "./news.component";
import { NewsDetailComponent } from "./news-detail/news-detail.component";

const routes: Routes = [
	{
		path: ":newsCategory",
		pathMatch: "full",
		component: NewsComponent,
	},
	{
		path: ":newsCategory/:newsTitle",
		component: NewsDetailComponent,
	},
];

@NgModule({
	imports: [
		RouterModule.forChild(routes),
		LocalizeRouterModule.forChild(routes),
	],
	exports: [RouterModule, LocalizeRouterModule],
})
export class NewsRoutingModule {}
