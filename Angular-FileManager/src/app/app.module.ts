import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FoldersComponent } from './components/folders/folders.component';
import { BoardComponent } from './components/board/board.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ContextMenuModule, ContextMenuService } from 'ngx-contextmenu';
import { ScrollStrategyOptions, ScrollDispatcher, ViewportRuler, OverlayContainer, OverlayPositionBuilder, OverlayKeyboardDispatcher } from '@angular/cdk/overlay';
import { Platform } from '@angular/cdk/platform';
import { Directionality } from '@angular/cdk/bidi';
import { SubFolderComponent } from './components/folders/subfolder/subfolder.component';
import { ClickDirective } from './components/board/click.directive';
import { FolderService } from './service/folder.service';
import { FileService } from './service/file.service';


@NgModule({
	declarations: [
		AppComponent,
		FoldersComponent,
		BoardComponent,
		ToolbarComponent,
		SubFolderComponent,
		ClickDirective,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		ContextMenuModule,
		FormsModule,
	],
	providers: [
		FolderService,
		FileService,
		ContextMenuService,
		ScrollStrategyOptions,
		ScrollDispatcher,
		Platform,
		ViewportRuler,
		OverlayContainer,
		OverlayPositionBuilder,
		OverlayKeyboardDispatcher,
		Directionality],
	bootstrap: [AppComponent]
})
export class AppModule { }
