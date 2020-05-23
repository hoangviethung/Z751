import { NgModule } from "@angular/core";
import { NewsRoutingModule } from "./news-routing.module";
import { NewsComponent } from "./news.component";
import { NewsSimpleComponent } from "./news-simple/news-simple.component";
import { NewsDetailComponent } from "./news-detail/news-detail.component";
import { NewsDetailOthersComponent } from "./news-detail/news-detail-others/news-detail-others.component";
import { SharedModule } from "../_shared/shared.module";
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
	declarations: [
		NewsComponent,
		NewsComponent,
		NewsSimpleComponent,
		NewsDetailComponent,
		NewsDetailOthersComponent,
	],
	imports: [SharedModule, NewsRoutingModule, TranslateModule.forChild()],
})
export class NewsModule {}
