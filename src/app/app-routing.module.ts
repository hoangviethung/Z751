import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Location } from '@angular/common';
import { MetaGuard } from '@ngx-meta/core';

import {
	LocalizeRouterModule,
	LocalizeRouterSettings,
	LocalizeParser,
	ManualParserLoader
} from '@gilsdav/ngx-translate-router';
import { TranslateService } from '@ngx-translate/core';

import { PreloadSelectedModulesList } from './custom-preloading-strategy';


const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		loadChildren: () => import('./component/home/home.module').then(m => m.HomeModule),
		canActivate: [MetaGuard],
		data: {
			preload: true
		}
	},
	{
		path: 'about',
		loadChildren: () => import('./component/about/about.module').then(m => m.AboutModule),
		canActivate: [MetaGuard],
		data: {
			meta: {
				title: 'META_TITLE.about',
			},
			preload: false
		}
	},
	{
		path: 'products',
		loadChildren: () => import('./component/product/product.module').then(m => m.ProductModule),
		canActivate: [MetaGuard],
		data: {
			preload: true
		}
	},
	{
		path: 'gallery',
		loadChildren: () => import('./component/gallery/gallery.module').then(m => m.GalleryModule),
		canActivate: [MetaGuard],
		data: {
			preload: false
		}
	},
	{
		path: 'news',
		loadChildren: () => import('./component/news/news.module').then(m => m.NewsModule),
		canActivate: [MetaGuard],
		data: {
			preload: false
		}
	},
	{
		path: 'contact',
		loadChildren: () => import('./component/contact/contact.module').then(m => m.ContactModule),
		canActivate: [MetaGuard],
		data: {
			meta: {
				title: 'META_TITLE.contact',
			},
			preload: false
		}
	},
	{
		path: '404',
		loadChildren: () => import('./component/page-not-found/page-not-found.module').then(m => m.PageNotFoundModule),
		canActivate: [MetaGuard],
		data: {
			meta: {
				title: 'META_TITLE.notfound',
			}
		}
	},
	{
		path: '**',
		redirectTo: '404'
	}
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes,
			{ preloadingStrategy: PreloadSelectedModulesList }),
		LocalizeRouterModule.forRoot(routes, {
			alwaysSetPrefix: false,
			parser: {
				provide: LocalizeParser,
				useFactory: (translate: TranslateService, location: Location, settings: LocalizeRouterSettings) =>
					new ManualParserLoader(translate, location, settings, ['vi', 'en'], 'ROUTES.'),
				deps: [TranslateService, Location, LocalizeRouterSettings],
			}
		})
	],
	exports: [RouterModule, LocalizeRouterModule],
	providers: [PreloadSelectedModulesList]
})
export class AppRoutingModule { }
