import { NgModule, ComponentRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsRoutingModule } from './news-routing.module';
import { NewsListComponent } from './news-list/news-list.component';
import { NewsDetailComponent } from './news-detail/news-detail.component';
import { TranslateModule } from '@ngx-translate/core';
import { NewsDetailContentComponent } from './news-detail/news-detail-content/news-detail-content.component';
import { NewsDetailOthersComponent } from './news-detail/news-detail-others/news-detail-others.component';
import { NewsListService } from './news-list/news-list.service';


@NgModule({
	declarations: [
		NewsListComponent,
		NewsDetailComponent,
		NewsDetailContentComponent,
		NewsDetailOthersComponent
	],
	imports: [
		CommonModule,
		NewsRoutingModule,
		TranslateModule.forChild()
	],
	providers: [
		NewsListService
	]
})
export class NewsModule { }
