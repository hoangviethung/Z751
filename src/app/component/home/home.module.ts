import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { HomeDetailComponent } from './home-detail/home-detail.component';
import { ShortAboutComponent } from './short-about/short-about.component';
import { HotBranchProductComponent } from './hot-branch-product/hot-branch-product.component';
import { HotNewsComponent } from './hot-news/hot-news.component';
import { HotGalleryComponent } from './hot-gallery/hot-gallery.component';

@NgModule({
    declarations: [
        HomeDetailComponent,
        ShortAboutComponent,
        HotBranchProductComponent,
        HotNewsComponent,
        HotGalleryComponent
    ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        TranslateModule.forChild()
    ]
})
export class HomeModule { }
