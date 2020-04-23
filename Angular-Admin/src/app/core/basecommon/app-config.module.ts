import { NgModule, APP_INITIALIZER, Injector } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'
import { TranslateModule, TranslateLoader } from '@ngx-translate/core'
import { TranslateLoaderHelper } from '../common/language.service'
import { HttpClient } from '@angular/common/http'
import { CookieService } from 'ngx-cookie-service'
import { HttpLoaderFactory } from '../common/config.service'
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2'
import { RouterModule } from '@angular/router'

@NgModule({
	imports: [
		HttpClientModule,
		RouterModule,
		TranslateModule.forRoot({
			loader: {
				provide: TranslateLoader,
				useClass: TranslateLoaderHelper,
				deps: [HttpClient],
			},
		}),
		SweetAlert2Module.forRoot(),
	],
	exports: [TranslateModule],
	providers: [
		CookieService,
		{
			provide: APP_INITIALIZER,
			useFactory: HttpLoaderFactory,
			deps: [Injector],
			multi: true,
		},
	],
})
export class AppConfigModule {}
