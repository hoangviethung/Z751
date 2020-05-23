import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
	{
		path: "index",
		loadChildren: () =>
			import("./components/index/index.module").then(
				(m) => m.IndexModule
			),
	},
	{
		path: "about",
		loadChildren: () =>
			import("./components/about/about.module").then(
				(m) => m.AboutModule
			),
	},
	{
		path: "products",
		loadChildren: () =>
			import("./components/product/product.module").then(
				(m) => m.ProductModule
			),
	},
	{
		path: "product-detail",
		loadChildren: () =>
			import("./components/product-detail/product-detail.module").then(
				(m) => m.ProductDetailModule
			),
	},
	{
		path: "departments",
		loadChildren: () =>
			import("./components/department/department.module").then(
				(m) => m.DepartmentModule
			),
	},
	{
		path: "capacities",
		loadChildren: () =>
			import("./components/capacity/capacity.module").then(
				(m) => m.CapacityModule
			),
	},
	{
		path: "capacity-detail",
		loadChildren: () =>
			import("./components/product-detail/product-detail.module").then(
				(m) => m.ProductDetailModule
			),
	},
	{
		path: "news",
		loadChildren: () =>
			import("./components/news/news.module").then((m) => m.NewsModule),
	},
	{
		path: "news-detail",
		loadChildren: () =>
			import("./components/news-detail/news-detail.module").then(
				(m) => m.NewsDetailModule
			),
	},
	{
		path: "contact",
		loadChildren: () =>
			import("./components/contact/contact.module").then(
				(m) => m.ContactModule
			),
	},
	{
		path: "error",
		loadChildren: () =>
			import("./components/page-not-found/page-not-found.module").then(
				(m) => m.PageNotFoundModule
			),
	},
	{
		path: "search",
		loadChildren: () =>
			import("./components/search/search.module").then(
				(m) => m.SearchModule
			),
	},
	{
		path: "**",
		loadChildren: () =>
			import("./components/redirect/redirect.module").then(
				(m) => m.RedirectModule
			),
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
