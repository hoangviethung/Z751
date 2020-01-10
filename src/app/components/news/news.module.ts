import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsRoutingModule } from './news-routing.module';
import { NewsListComponent } from './news-list/news-list.component';
import { NewsDetailComponent } from './news-detail/news-detail.component';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
	declarations: [
		NewsListComponent,
		NewsDetailComponent
	],
	imports: [
		CommonModule,
		NewsRoutingModule,
		TranslateModule.forChild()
	]
})
export class NewsModule { }
