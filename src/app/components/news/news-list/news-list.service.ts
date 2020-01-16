import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/shared/services/http.service';
import { Observable } from 'rxjs';

@Injectable()

export class NewsListService {
	constructor(
		private httpSvc: HttpService,
	) {
	}

	fetchNews(url: string): Observable<any> {
		return this.httpSvc.get(url);
	}
}