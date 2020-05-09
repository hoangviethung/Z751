import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleRoutingModule } from './article-routing.module';
import { ArticleComponent } from './article.component';
import { AddEditComponent } from './add-edit/add-edit.component';
import { SharedModule } from 'src/app/_core/shared.module';


@NgModule({
	declarations: [ArticleComponent, AddEditComponent],
	imports: [
		CommonModule,
		ArticleRoutingModule,
		SharedModule
	]
})
export class ArticleModule { }
