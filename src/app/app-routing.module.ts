import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Location } from '@angular/common';

import { LocalizeRouterModule, LocalizeRouterSettings, LocalizeParser, ManualParserLoader } from '@gilsdav/ngx-translate-router';
import { TranslateService } from '@ngx-translate/core';


const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		loadChildren: () => import('./components/index/index.module').then(m => m.IndexModule),
		data: {
			preload: false,
			breadcrumb: 'Home'
		}
	},
	{
		path: 'about',
		loadChildren: () => import('./components/about/about.module').then(m => m.AboutModule),
		data: {
			preload: false,
			breadcrumb: 'About Z751'
		}
	},
	{
		path: 'products',
		loadChildren: () => import('./components/product/product.module').then(m => m.ProductModule),
		data: {
			preload: false,
			breadcrumb: 'Products'
		}
	},
	{
		path: 'activities',
		loadChildren: () => import('./components/activities/activities.module').then(m => m.ActivitiesModule),
		data: {
			preload: false,
			breadcrumb: 'Activities'
		}
	},
	// {
	// 	path: 'videos',
	// 	loadChildren: () => import('./components/activities/activities.module').then(m => m.ActivitiesModule),
	// 	data: {
	// 		preload: false,
	// 	}
	// },
	// {
	// 	path: 'images',
	// 	loadChildren: () => import('./components/activities/activities.module').then(m => m.ActivitiesModule),
	// 	data: {
	// 		preload: false,
	// 	}
	// },
	{
		path: 'profiles',
		loadChildren: () => import('./components/profile/profile.module').then(m => m.ProfileModule),
		data: {
			preload: false,
			breadcrumb: 'Profiles'
		}
	},
	{
		path: 'news',
		loadChildren: () => import('./components/news/news.module').then(m => m.NewsModule),
		data: {
			preload: false,
			breadcrumb: 'News'
		}
	},
	{
		path: 'contact',
		loadChildren: () => import('./components/contact/contact.module').then(m => m.ContactModule),
		data: {
			preload: false,
			breadcrumb: 'Contact'
		}
	},
	{
		path: '404',
		loadChildren: () => import('./components/page-not-found/page-not-found.module').then(m => m.PageNotFoundModule),
		data: {
			preload: false,
		}
	},
	{
		path: '**',
		redirectTo: '404'
	}
];


@NgModule({
	imports: [
		RouterModule.forRoot(routes),
		LocalizeRouterModule.forRoot(routes, {
			alwaysSetPrefix: false,
			useCachedLang: false,
			parser: {
				provide: LocalizeParser,
				useFactory: (translate: TranslateService, location: Location, settings: LocalizeRouterSettings) => {
					settings.defaultLangFunction = () => 'vi'
					return new ManualParserLoader(translate, location, settings, ['vi', 'en'], 'ROUTES.');
				},
				deps: [TranslateService, Location, LocalizeRouterSettings]
			}
		})
	],
	exports: [RouterModule, LocalizeRouterModule]
})
export class AppRoutingModule { }
