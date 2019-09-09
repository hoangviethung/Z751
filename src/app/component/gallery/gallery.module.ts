import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

import { GalleryRoutingModule } from './gallery-routing.module';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';
import { VideoGalleryComponent } from './video-gallery/video-gallery.component';
import { GalleryDetailComponent } from './gallery-detail/gallery-detail.component';


@NgModule({
  declarations: [
    ImageGalleryComponent,
    VideoGalleryComponent,
    GalleryDetailComponent
  ],
  imports: [
    CommonModule,
    GalleryRoutingModule,
    TranslateModule.forChild()
  ]
})
export class GalleryModule { }
