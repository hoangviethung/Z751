import { LocalizeRouterModule } from '@gilsdav/ngx-translate-router';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutDetailComponent } from './about-detail/about-detail.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: AboutDetailComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    LocalizeRouterModule.forChild(routes)
  ],
  exports: [RouterModule, LocalizeRouterModule]
})
export class AboutRoutingModule { }

