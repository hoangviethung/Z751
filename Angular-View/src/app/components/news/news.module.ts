import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NewsRoutingModule } from "./news-routing.module";
import { NewsComponent } from "./news.component";
import { NewsSimpleComponent } from "./news-simple/news-simple.component";
import { NewsDetailComponent } from "./news-detail/news-detail.component";
import { NewsDetailOthersComponent } from "./news-detail/news-detail-others/news-detail-others.component";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
	declarations: [
		NewsComponent,
		NewsComponent,
		NewsSimpleComponent,
		NewsDetailComponent,
		NewsDetailOthersComponent,
	],
	imports: [SharedModule, NewsRoutingModule],
	providers: [],
})
export class NewsModule {}
