import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';
import { Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
	imports: [
		AppModule,
		ServerModule,
		BrowserModule.withServerTransition({
			appId: 'z751'
		}),
		ModuleMapLoaderModule,
	],
	bootstrap: [AppComponent],
})
export class AppServerModule { }
