import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { BranchNewsComponent } from './branch-news/branch-news.component';
import { SimpleListComponent } from './simple-list/simple-list.component';
import { NewsDetailComponent } from './news-detail/news-detail.component';
import { GeneralComponent } from './news-detail/general/general.component';
import { NewsRelatedComponent } from './news-detail/news-related/news-related.component';


@NgModule({
  declarations: [BranchNewsComponent, SimpleListComponent, NewsDetailComponent, GeneralComponent, NewsRelatedComponent],
  imports: [
    CommonModule,
    NewsRoutingModule
  ]
})
export class NewsModule { }
