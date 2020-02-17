import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexProductItemDirective } from './directives/index-product-item.directive';
import { IndexNewsItemDirective } from './directives/index-news-item.directive';
import { BreadcrumbComponent } from '../components/_shared/breadcrumb/breadcrumb.component';
import { ToggleSubMenuDirective } from './directives/toggle-sub-menu.directive';
import { ToggleMenuDirective } from './directives/toggle-menu.directive';
import { CloseMenuDirective } from './directives/close-menu.directive';
import { PaginationComponent } from '../components/_shared/pagination/pagination.component';
import { NgxIndexedDBService, NgxIndexedDBModule, DBConfig } from 'ngx-indexed-db';
import { IndexedDbService } from './services/indexed-db.service';


export const dbConfig: DBConfig = {
	name: 'z751',
	version: 1,
	objectStoresMeta: [{
		store: 'news',
		storeConfig: { keyPath: 'id', autoIncrement: true },
		storeSchema: [
			{
				name: 'id',
				keypath: 'id',
				options: { unique: true }
			},

			{
				name: 'img',
				keypath: 'img',
				options: { unique: false }
			},

			{
				name: 'title',
				keypath: 'title',
				options: { unique: false }
			},

			{
				name: 'time',
				keypath: 'time',
				options: { unique: false }
			},

			{
				name: 'description',
				keypath: 'description',
				options: { unique: false }
			}
		]
	}]
};

@NgModule({
	declarations: [
		BreadcrumbComponent,
		PaginationComponent,
		ToggleMenuDirective,
		ToggleSubMenuDirective,
		CloseMenuDirective,
		IndexProductItemDirective,
		IndexNewsItemDirective,
	],
	imports: [
		CommonModule,
		NgxIndexedDBModule.forRoot(dbConfig)
	],
	exports: [
		BreadcrumbComponent,
		PaginationComponent,
		ToggleMenuDirective,
		ToggleSubMenuDirective,
		CloseMenuDirective,
		IndexProductItemDirective,
		IndexNewsItemDirective,
	],
	providers: [
		IndexedDbService,
		NgxIndexedDBService
	]
})
export class SharedModule { }
