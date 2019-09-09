import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { PageNotFoundRoutingModule } from './page-not-found-routing.module';
import { DetailComponent } from './detail/detail.component';


@NgModule({
  declarations: [DetailComponent],
  imports: [
    CommonModule,
    PageNotFoundRoutingModule,
    TranslateModule.forChild()
  ]
})
export class PageNotFoundModule { }
