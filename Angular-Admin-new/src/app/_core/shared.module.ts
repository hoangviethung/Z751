import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AsideMenuDirective } from './components/aside-menu/aside-menu.directive';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { RoutingService } from './services/routing.service';
import { RouterModule } from '@angular/router';
import { TabDirective } from './directive/tab.directive';
import { CKEditorComponent } from './components/ckeditor/ckeditor.component';
import { CKEditorModule } from 'ckeditor4-angular';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { TableImagesComponent } from './components/table-images/table-images.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { DialogService } from './components/dialog/dialog.service';

@NgModule({
	declarations: [
		AsideMenuDirective,
		BreadcrumbComponent,
		CKEditorComponent,
		PaginationComponent,
		TabDirective,
		TableImagesComponent,
		DialogComponent,
	],
	imports: [
		CommonModule,
		FormsModule,
		HttpClientModule,
		RouterModule,
		CKEditorModule,
		ReactiveFormsModule,
		MatDatepickerModule,
		MatNativeDateModule,
		MatInputModule,
	],
	exports: [
		CommonModule,
		FormsModule,
		CKEditorComponent,
		TableImagesComponent,
		PaginationComponent,
		HttpClientModule,
		RouterModule,
		ReactiveFormsModule,
		BreadcrumbComponent,
		AsideMenuDirective,
		TabDirective,
		MatSelectModule,
		MatDatepickerModule,
		MatNativeDateModule,
		MatInputModule,
		DialogComponent,
	],
	providers: [RoutingService, DialogService],
})
export class SharedModule {}
