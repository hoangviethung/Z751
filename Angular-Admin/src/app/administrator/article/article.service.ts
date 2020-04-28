import { Injectable } from '@angular/core';
import { HttpService } from 'src/_core/services/http.service';
import { Observable } from 'rxjs';
import { ApiConfig } from 'src/_core/configs/api';
import { ArticleModel } from 'src/_core/models/article.model';


@Injectable({
	providedIn: 'root'
})
export class ArticleService {
	articles: Array<ArticleModel>
	constructor(
		private httpSvc: HttpService
	) { }

	fetch(params?): Observable<any> {
		return this.httpSvc.get(ApiConfig.article.gets, params)
	}
}
