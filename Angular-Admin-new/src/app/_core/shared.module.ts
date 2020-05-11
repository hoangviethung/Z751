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
@NgModule({
	declarations: [
		AsideMenuDirective,
		BreadcrumbComponent,
		CKEditorComponent,
		TabDirective,
	],
	imports: [
		CommonModule,
		FormsModule,
		HttpClientModule,
		RouterModule,
		CKEditorModule,
		ReactiveFormsModule,
	],
	exports: [
		CommonModule,
		FormsModule,
		HttpClientModule,
		RouterModule,
		BreadcrumbComponent,
		AsideMenuDirective,
		CKEditorComponent,
		TabDirective,
		ReactiveFormsModule,
		MatSelectModule,
	],
	providers: [RoutingService],
})
export class SharedModule {}
