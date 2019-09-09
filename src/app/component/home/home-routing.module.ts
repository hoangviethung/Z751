import { LocalizeRouterModule } from "@gilsdav/ngx-translate-router";

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeDetailComponent } from './home-detail/home-detail.component';



const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeDetailComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    LocalizeRouterModule.forChild(routes)
  ],
  exports: [RouterModule, LocalizeRouterModule]
})
export class HomeRoutingModule { }
