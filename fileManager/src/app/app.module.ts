import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FolderService } from './service/folder';
import { HttpClientModule } from '@angular/common/http';
import { FileService } from './service/file';
import { FoldersComponent } from './folders/folders.component';
import { BoardComponent } from './board/board.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ContextMenuModule, ContextMenuService } from 'ngx-contextmenu';
import { ScrollStrategyOptions, ScrollDispatcher, ViewportRuler, OverlayContainer, OverlayPositionBuilder, OverlayKeyboardDispatcher } from '@angular/cdk/overlay';
import { Platform } from '@angular/cdk/platform';
import { Directionality } from '@angular/cdk/bidi';
import { SubFolderComponent } from './folders/subfolder/subfolder.component';
import { ClickDirective } from './board/click.directive';


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
  providers: [FolderService, FileService, ContextMenuService, 
    ScrollStrategyOptions, ScrollDispatcher, Platform, ViewportRuler,
    OverlayContainer, OverlayPositionBuilder, OverlayKeyboardDispatcher,
    Directionality],
  bootstrap: [AppComponent]
})
export class AppModule { }
