import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';
import { TranslateLoader, TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { LocalizeParser } from '@gilsdav/ngx-translate-router';
import { Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

const fs = require('fs');

export class TranslateUniversalLoader implements TranslateLoader {
	/**
	 * Gets the translations from the server
	 * @param lang
	 * @returns {any}
	 */
	public getTranslation(lang: string): Observable<any> {
		return Observable.create(observer => {
			observer.next(JSON.parse(fs.readFileSync(`/assets/i18n/${lang}.json`, 'utf8')));
			observer.complete();
		});
	}
}

export class LocalizeUniversalLoader extends LocalizeParser {
	/**
	 * Gets config from the server
	 * @param routes
	 */
	public load(routes: Routes): Promise<any> {
		return new Promise((resolve: any) => {
			let data: any = JSON.parse(fs.readFileSync(`/assets/locales.json`, 'utf8'));
			console.log(data);
			
			this.locales = data.locales;
			this.prefix = data.prefix;
			this.init(routes).then(resolve);
		});
	}
}

// export function localizeLoaderFactory(translate: TranslateService, location: Location) {
// 	return new LocalizeUniversalLoader(translate, location);
// }


@NgModule({
	imports: [
		AppModule,
		ServerModule,
		BrowserModule.withServerTransition({
			appId: 'my-app-id'
		}),
		ModuleMapLoaderModule,
	],
	bootstrap: [AppComponent],
})
export class AppServerModule { }
