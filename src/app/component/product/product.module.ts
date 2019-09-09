import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { BranchProductComponent } from './branch-product/branch-product.component';
import { TranslateModule } from '@ngx-translate/core';
import { ProductTypesComponent } from './product-types/product-types.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CommentComponent } from './product-detail/comment/comment.component';
import { GeneralComponent } from './product-detail/general/general.component';
import { InformationComponent } from './product-detail/information/information.component';
import { MenuRightComponent } from './product-detail/menu-right/menu-right.component';
import { RelatedComponent } from './product-detail/related/related.component';
import { SharedModule } from '../../shared/shared.module';
import { ImageListComponent } from './product-detail/image-list/image-list.component';


@NgModule({
  declarations: [
    BranchProductComponent,
    ProductTypesComponent,
    ProductDetailComponent,
    CommentComponent,
    GeneralComponent,
    InformationComponent,
    MenuRightComponent,
    RelatedComponent,
    ImageListComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    TranslateModule.forChild(),
    SharedModule.forRoot()
  ],
  exports: [
    SharedModule
  ]
})
export class ProductModule { }
