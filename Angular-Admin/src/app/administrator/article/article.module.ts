import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { ArticleRoutingModule } from './article-routing.module'
import { ArticleComponent } from './article.component'
import { TabDirective } from '../../directive/tab.directive'

@NgModule({
	declarations: [ArticleComponent, TabDirective],
	imports: [CommonModule, ArticleRoutingModule],
})
export class ArticleModule {}
