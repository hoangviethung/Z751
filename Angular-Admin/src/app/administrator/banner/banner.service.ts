import { Injectable } from '@angular/core'
import { HttpService } from 'src/_core/services/http.service'
import { Observable } from 'rxjs'
import { ResultCode } from 'src/core/constant/AppEnums'

@Injectable({
	providedIn: 'root',
})
export class BannerService {
	constructor(
		private httpSvc: HttpService
	) { }

	fetch(): Observable<ResultCode> {
		return this.httpSvc.get('http://27.71.234.45:8080/api/Article/used/gets')
	}

	add() { }
	update() { }
	delete() { }
}
