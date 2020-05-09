import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AsideMenuDirective } from './components/aside-menu/aside-menu.directive';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { RoutingService } from './services/routing.service';
import { RouterModule } from '@angular/router';

@NgModule({
	declarations: [AsideMenuDirective, BreadcrumbComponent],
	imports: [CommonModule, FormsModule, HttpClientModule, RouterModule],
	exports: [
		CommonModule,
		FormsModule,
		HttpClientModule,
		RouterModule,
		BreadcrumbComponent,
		AsideMenuDirective,
	],
	providers: [RoutingService],
})
export class SharedModule {}
