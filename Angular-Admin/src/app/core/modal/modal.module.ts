import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FormsModule} from '@angular/forms';
import {ModalService} from 'src/app/core/modal/modal.service';
import {ModalComponent} from 'src/app/core/modal/modal.component';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([{}])
  ],
  declarations: [
    ModalComponent,
  ],
  providers: [
    ModalService,
  ],
  exports: [
    ModalComponent,
    RouterModule
  ]
})
export class ModalModule
{
}
