import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouteGuardService } from './route-guard.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { ToastrModule, ToastNoAnimationModule } from 'ngx-toastr';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		FormsModule,
		ToastrModule.forRoot(),
		ToastNoAnimationModule.forRoot(),
	],
	providers: [RouteGuardService],
	bootstrap: [AppComponent],
})
export class AppModule {}
