import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocalizeRouterModule } from "@gilsdav/ngx-translate-router";
import { BranchNewsComponent } from './branch-news/branch-news.component';
import { SimpleListComponent } from './simple-list/simple-list.component';
import { NewsDetailComponent } from './news-detail/news-detail.component';
import { MetaGuard } from '@ngx-meta/core';

const routes: Routes = [
  {
    path:'',
    pathMatch: 'full',
    component: BranchNewsComponent,
    canActivate: [MetaGuard],
    data: {
      meta: {
        title: 'META_TITLE.news',
      }
    }
  },
  {
    path: ':type',
    component: SimpleListComponent
  },
  {
    path: ':type/:url',
    component: NewsDetailComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    LocalizeRouterModule.forChild(routes)
  ],
  exports: [
    RouterModule,
    LocalizeRouterModule
  ]
})
export class NewsRoutingModule { }
