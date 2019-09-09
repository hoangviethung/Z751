import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';

import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [ContactDetailComponent],
  imports: [
    CommonModule,
    ContactRoutingModule,
    TranslateModule.forChild()
  ]
})
export class ContactModule { }
