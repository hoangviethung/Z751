import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { ArticleRoutingModule } from './article-routing.module'
import { ArticleComponent } from './article.component'
import { SharedModule } from 'src/_core/shared/shared.module'
import { AddEditComponent } from './add-edit/add-edit.component'

@NgModule({
	declarations: [ArticleComponent, AddEditComponent],
	imports: [CommonModule, ArticleRoutingModule, SharedModule],
})
export class ArticleModule {}
