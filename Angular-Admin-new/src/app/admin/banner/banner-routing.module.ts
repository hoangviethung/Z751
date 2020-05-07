import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BannerComponent } from './banner.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: BannerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BannerRoutingModule {}
