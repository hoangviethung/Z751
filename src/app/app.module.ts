import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MetaModule, MetaLoader, MetaStaticLoader, PageTitlePositioning } from '@ngx-meta/core';
import { PLATFORM_ID, APP_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/shared/header/header.component';
import { BannerComponent } from './component/shared/banner/banner.component';
import { FooterComponent } from './component/shared/footer/footer.component';
import { BreadcrumbComponent } from './component/shared/breadcrumb/breadcrumb.component';
import { PaginationComponent } from './component/shared/pagination/pagination.component';
import { environment } from '../environments/environment';

export function createTranslateLoader(http: HttpClient) {
	return new TranslateHttpLoader(http, `${environment.locales}assets/locales/`, '.json');
}

export function metaFactory(translate: TranslateService): MetaLoader {
	return new MetaStaticLoader({
		callback: (key: string) => translate.get(key),
		pageTitlePositioning: PageTitlePositioning.PrependPageTitle,
		pageTitleSeparator: '',
		applicationName: '',
		defaults: {
			title: 'META_TITLE.default',
			description: 'META_DESCRIPTION.default',
			keywords: 'META_DESCRIPTION.default',
			author: 'Web4G Solutions',
			generator: 'ng-seed',
			'og:image': 'https://upload.wikimedia.org/wikipedia/commons/f/f8/superraton.jpg',
			'og:type': 'website',
			'og:locale:alternate': 'en_US'
		}
	});
}

@NgModule({
	imports: [
		BrowserModule.withServerTransition({ appId: 'z751' }),
		FormsModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		HttpClientModule,
		SharedModule.forRoot(),
		MetaModule.forRoot({
			provide: MetaLoader,
			useFactory: (metaFactory),
			deps: [TranslateService]
		}),
		TranslateModule.forRoot({
			loader: {
				provide: TranslateLoader,
				useFactory: (createTranslateLoader),
				deps: [HttpClient]
			}
		}),
	],
	declarations: [
		AppComponent,
		HeaderComponent,
		BannerComponent,
		FooterComponent,
		BreadcrumbComponent,
		PaginationComponent
	],
	exports: [
		SharedModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
	constructor(
		@Inject(PLATFORM_ID) private platformId: object,
		@Inject(APP_ID) private appId: string) {
		const platform = isPlatformBrowser(platformId) ?
			'in the browser' : 'on the server';
		console.log(`Running ${platform} with appId=${appId}`);
	}
}
