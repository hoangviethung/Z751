import { NgModule, ComponentRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsRoutingModule } from './news-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { NewsComponent } from './news.component';
import { NewsService } from './news.service';
import { NewsSimpleComponent } from './news-simple/news-simple.component';
import { NewsDetailComponent } from './news-detail/news-detail.component';
import { NewsDetailContentComponent } from './news-detail/news-detail-content/news-detail-content.component';
import { NewsDetailOthersComponent } from './news-detail/news-detail-others/news-detail-others.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
	declarations: [
		NewsComponent,
		NewsComponent,
		NewsSimpleComponent,
		NewsDetailComponent,
		NewsDetailContentComponent,
		NewsDetailOthersComponent
	],
	imports: [
		SharedModule,
		CommonModule,
		NewsRoutingModule,
		TranslateModule.forChild()
	],
	providers: [
		NewsService
	]
})
export class NewsModule { }
