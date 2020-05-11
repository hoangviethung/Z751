import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleComponent } from './article.component';
import { AddEditComponent } from './add-edit/add-edit.component';

const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		component: ArticleComponent,
		data: { title: 'Danh sách bài viết' },
	},
	{
		path: 'add',
		component: AddEditComponent,
		data: { title: 'Thêm bài viết' },
	},
	{
		path: 'edit/:ArticleId',
		component: AddEditComponent,
		data: { title: 'Chỉnh sửa bài viết' },
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class ArticleRoutingModule {}
