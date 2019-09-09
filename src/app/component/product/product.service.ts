import { Injectable } from '@angular/core';
import { HttpService } from '../../shared/services/http.service';
import { HttpParams } from '@angular/common/http';
import { UtilsService } from '../../shared/services/utils.service';

@Injectable()
export class ProductService extends UtilsService {
  
  private urlHavingProduct = "Category/used/gets/hierarchy/having-product";
  constructor(
    private _http: HttpService
  ) {
    super();
  }

  getHavingProduct() {
    return this._http.get(this.urlHavingProduct);
  }
}
