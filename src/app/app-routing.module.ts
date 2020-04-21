import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { Location } from "@angular/common";

import {
	LocalizeRouterModule,
	LocalizeRouterSettings,
	LocalizeParser,
	ManualParserLoader,
} from "@gilsdav/ngx-translate-router";
import { TranslateService } from "@ngx-translate/core";

const routes: Routes = [
	{
		path: "",
		pathMatch: "full",
		loadChildren: () =>
			import("./components/index/index.module").then(
				(m) => m.IndexModule
			),
		data: {
			preload: false,
		},
	},
	{
		path: "about",
		loadChildren: () =>
			import("./components/about/about.module").then(
				(m) => m.AboutModule
			),
		data: {
			preload: false,
		},
	},
	{
		path: "products",
		loadChildren: () =>
			import("./components/product/product.module").then(
				(m) => m.ProductModule
			),
		data: {
			preload: false,
		},
	},
	{
		path: "departments",
		loadChildren: () =>
			import("./components/department/department.module").then(
				(m) => m.DepartmentModule
			),
		data: {
			preload: false,
		},
	},
	{
		path: "activities",
		loadChildren: () =>
			import("./components/activities/activities.module").then(
				(m) => m.ActivitiesModule
			),
		data: {
			preload: false,
		},
	},
	{
		path: "capacities",
		loadChildren: () =>
			import("./components/capacity/capacity.module").then(
				(m) => m.CapacityModule
			),
		data: {
			preload: false,
		},
	},
	{
		path: "news",
		loadChildren: () =>
			import("./components/news/news.module").then((m) => m.NewsModule),
		data: {
			preload: false,
		},
	},
	{
		path: "contact",
		loadChildren: () =>
			import("./components/contact/contact.module").then(
				(m) => m.ContactModule
			),
		data: {
			preload: false,
		},
	},
	{
		path: "404",
		loadChildren: () =>
			import("./components/page-not-found/page-not-found.module").then(
				(m) => m.PageNotFoundModule
			),
		data: {
			preload: false,
		},
	},
	{
		path: "**",
		redirectTo: "404",
	},
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes),
		LocalizeRouterModule.forRoot(routes, {
			alwaysSetPrefix: false,
			useCachedLang: false,
			parser: {
				provide: LocalizeParser,
				useFactory: (
					translate: TranslateService,
					location: Location,
					settings: LocalizeRouterSettings
				) => {
					settings.defaultLangFunction = () => "vi";
					console.log(new ManualParserLoader(
						translate,
						location,
						settings,
						["vi", "en"],
						"ROUTES."
					));
					
					return new ManualParserLoader(
						translate,
						location,
						settings,
						["vi", "en"],
						"ROUTES."
					);
				},
				deps: [TranslateService, Location, LocalizeRouterSettings],
			},
		}),
	],
	exports: [RouterModule, LocalizeRouterModule],
})
export class AppRoutingModule {}
