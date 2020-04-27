import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { AccountModule } from './account/account.module'
import { BrowserModule } from '@angular/platform-browser'
import { SafeHtmlPipe } from '../core/pipes/safe-html-pipe'
import { ToastrModule } from 'ngx-toastr'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule } from '@angular/forms'
import { LoadingService } from '../core/loading/loading.service'
import { AuthenticService } from '../core/authentication/authentic.service';
import { TabDirective } from './directive/tab.directive';

@NgModule({
	imports: [
		BrowserModule,
		AppRoutingModule,
		AccountModule,
		FormsModule,
		BrowserAnimationsModule,
		ToastrModule.forRoot({
			timeOut: 3000,
			positionClass: 'toast-bottom-right',
			preventDuplicates: false,
		}),
	],
	declarations: [AppComponent, SafeHtmlPipe],
	bootstrap: [AppComponent],
	providers: [LoadingService, AuthenticService],
})
export class AppModule { }
