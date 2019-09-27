import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { HttpService } from '../../shared/services/http.service';
import { isPlatformBrowser } from '@angular/common';
import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';
import { UtilsService } from '../../shared/services/utils.service';
import { Observable } from 'rxjs';

@Injectable()

class RequestOption {
	body?: any;
	headers?: HttpHeaders | {
		[header: string]: string | string[];
	};
	observe?: any;
	params?: HttpParams | {
		[param: string]: string | string[];
	};
	reportProgress?: boolean;
	responseType: any;
	withCredentials?: boolean;
}

export class ProductService extends UtilsService {

	private productBranchUrl = 'Category/used/gets/hierarchy/having-product';
	private productsByCategoryId = 'Product/used/gets/paging?page=1&count=100&categoryIds='
	private productUrl = 'Product/used/get/by-url?url='
	locale: string;


	private get TOKEN(): string {
		const token = '';
		return token || "";
	}

	private get LANGUAGE(): string {
		// let language = this._localStorage.get(LOCAL_STORAGE_KEY.language);
		// if (!language) {
		//     language = LanguageEnum.DEFAULT_LANGUAGE;
		//     this._localStorage.set(LOCAL_STORAGE_KEY.language, language);
		// }
		// return language;
		return 'en'
	}

	constructor(
		private _http: HttpService,
		@Inject(PLATFORM_ID) private platformId: Object
	) {
		super();
	}

	getHavingProduct(): Observable<any> {
		return this._http.get(this.productBranchUrl)
	}
	getProductsByCategoryId(code: string): Observable<any> {
		return this._http.get(this.productsByCategoryId + code)
	}
	getProduct(url: string): Observable<any> {
		return this._http.get(this.productUrl + url)
	}
}
