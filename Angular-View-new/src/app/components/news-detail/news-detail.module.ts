import { NgModule } from "@angular/core";

import { SharedModule } from "../_shared/shared.module";
import { NewsDetailRoutingModule } from "./news-detail-routing.module";

import { NewsDetailComponent } from "./news-detail.component";
import { NewsDetailOthersComponent } from "./news-detail-others/news-detail-others.component";
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
	declarations: [NewsDetailComponent, NewsDetailOthersComponent],
	imports: [
		SharedModule,
		NewsDetailRoutingModule,
		TranslateModule.forChild(),
	],
})
export class NewsDetailModule {}
