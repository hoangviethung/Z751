import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
	{
		path: "index",
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
		path: "product-detail",
		loadChildren: () =>
			import("./components/product-detail/product-detail.module").then(
				(m) => m.ProductDetailModule
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
		path: "news-detail",
		loadChildren: () =>
			import("./components/news-detail/news-detail.module").then(
				(m) => m.NewsDetailModule
			),
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
		path: "error",
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
		loadChildren: () =>
			import("./components/redirect/redirect.module").then(
				(m) => m.RedirectModule
			),
		data: {
			preload: false,
		},
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
