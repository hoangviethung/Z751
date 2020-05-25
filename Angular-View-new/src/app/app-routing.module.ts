import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HttpService } from "src/core/services/http.service";

const routes: Routes = [
	{
		path: "index",
		loadChildren: () =>
			import("./components/index/index.module").then(
				(m) => m.IndexModule
			),
		data: {
			animation: "*",
		},
	},
	{
		path: "about",
		loadChildren: () =>
			import("./components/about/about.module").then(
				(m) => m.AboutModule
			),
		data: {
			animation: "*",
		},
	},
	{
		path: "products",
		loadChildren: () =>
			import("./components/product/product.module").then(
				(m) => m.ProductModule
			),
		data: {
			animation: "*",
		},
	},
	{
		path: "product-detail",
		loadChildren: () =>
			import("./components/product-detail/product-detail.module").then(
				(m) => m.ProductDetailModule
			),
		data: {
			animation: "*",
		},
	},
	{
		path: "departments",
		loadChildren: () =>
			import("./components/department/department.module").then(
				(m) => m.DepartmentModule
			),
		data: {
			animation: "*",
		},
	},
	{
		path: "capacities",
		loadChildren: () =>
			import("./components/capacity/capacity.module").then(
				(m) => m.CapacityModule
			),
		data: {
			animation: "*",
		},
	},
	{
		path: "capacity-detail",
		loadChildren: () =>
			import("./components/product-detail/product-detail.module").then(
				(m) => m.ProductDetailModule
			),
		data: {
			animation: "*",
		},
	},
	{
		path: "news",
		loadChildren: () =>
			import("./components/news/news.module").then((m) => m.NewsModule),
		data: {
			animation: "*",
		},
	},
	{
		path: "news-detail",
		loadChildren: () =>
			import("./components/news-detail/news-detail.module").then(
				(m) => m.NewsDetailModule
			),
		data: {
			animation: "*",
		},
	},
	{
		path: "contact",
		loadChildren: () =>
			import("./components/contact/contact.module").then(
				(m) => m.ContactModule
			),
		data: {
			animation: "*",
		},
	},
	{
		path: "error",
		loadChildren: () =>
			import("./components/page-not-found/page-not-found.module").then(
				(m) => m.PageNotFoundModule
			),
		data: {
			animation: "*",
		},
	},
	{
		path: "search",
		loadChildren: () =>
			import("./components/search/search.module").then(
				(m) => m.SearchModule
			),
		data: {
			animation: "*",
		},
	},
	{
		path: "**",
		loadChildren: () =>
			import("./components/redirect/redirect.module").then(
				(m) => m.RedirectModule
			),
		data: {
			animation: "*",
		},
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
