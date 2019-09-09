import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { AboutRoutingModule } from './about-routing.module';
import { SharedModule } from '../../shared/shared.module';

import { AboutDetailComponent } from './about-detail/about-detail.component';

@NgModule({
  declarations: [
    AboutDetailComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    TranslateModule.forChild(),
    SharedModule.forRoot()
  ],
  exports: [
    SharedModule
  ]
})
export class AboutModule { }
