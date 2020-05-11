import { NgModule } from '@angular/core';

import { ArticleRoutingModule } from './article-routing.module';
import { ArticleComponent } from './article.component';
import { AddEditComponent } from './add-edit/add-edit.component';
import { SharedModule } from 'src/app/_core/shared.module';

@NgModule({
	declarations: [ArticleComponent, AddEditComponent],
	imports: [ArticleRoutingModule, SharedModule],
})
export class ArticleModule {}
