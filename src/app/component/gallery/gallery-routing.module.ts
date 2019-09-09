import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocalizeRouterModule } from '@gilsdav/ngx-translate-router';
import { GalleryDetailComponent } from './gallery-detail/gallery-detail.component';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';
import { VideoGalleryComponent } from './video-gallery/video-gallery.component';
import { MetaGuard } from '@ngx-meta/core';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: GalleryDetailComponent,
    canActivate: [MetaGuard],
    data: {
      meta: {
        title: 'META_TITLE.gallery',
      }
    }
  },
  {
    path: 'images',
    component: ImageGalleryComponent,
    canActivate: [MetaGuard],
    data: {
      meta: {
        title: 'META_TITLE.images',
      }
    }
  },
  {
    path: 'videos',
    component: VideoGalleryComponent,
    canActivate: [MetaGuard],
    data: {
      meta: {
        title: 'META_TITLE.videos',
      }
    }
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    LocalizeRouterModule.forChild(routes)
  ],
  exports: [
    RouterModule,
    LocalizeRouterModule
  ]
})
export class GalleryRoutingModule {}
