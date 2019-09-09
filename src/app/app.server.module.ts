import { NgModule, NgModuleFactoryLoader } from '@angular/core';
import { ServerModule,ServerTransferStateModule } from '@angular/platform-server';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';
import { LazyUniversalModuleLoaderProvider } from 'localize-router-lazy-universal-module-loader';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    ModuleMapLoaderModule,
    ServerTransferStateModule
  ],
  providers: [
    // Add universal-only providers here
    LazyUniversalModuleLoaderProvider
  ],
  bootstrap: [ AppComponent ],
})
export class AppServerModule {}

