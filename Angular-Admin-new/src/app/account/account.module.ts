import { NgModule } from '@angular/core';

import { AccountRoutingModule } from './account-routing.module';
import { SharedModule } from '../_core/shared.module';

@NgModule({
  declarations: [],
  imports: [SharedModule, AccountRoutingModule],
})
export class AccountModule {}
